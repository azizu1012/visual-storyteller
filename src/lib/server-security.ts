/**
 * Server Security & DDoS Mitigation Guard
 * 
 * Bộ lọc bảo vệ máy chủ phòng chống tấn công DoS/DDoS, spam flood, payload bomb
 * và chèn các HTTP Security Headers tiêu chuẩn.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// Giới hạn tần suất: tối đa 150 request trong 10 giây cho mỗi IP
const RATE_LIMIT_WINDOW_MS = 10_000;
const MAX_REQUESTS_PER_WINDOW = 150;
const MAX_PAYLOAD_BYTES = 256 * 1024; // 256 KB

const ipRequestMap = new Map<string, RateLimitRecord>();

// Dọn dẹp cache IP định kỳ để tránh rò rỉ bộ nhớ (Memory Leak)
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRequestMap.entries()) {
      if (now > record.resetTime) {
        ipRequestMap.delete(ip);
      }
    }
  }, 60_000);
}

export function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const firstIp = xff.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}

/**
 * Kiểm tra Rate Limit theo địa chỉ IP
 */
export function checkRateLimit(request: Request): { allowed: boolean; retryAfter?: number } {
  const ip = getClientIp(request);
  const now = Date.now();
  const record = ipRequestMap.get(ip);

  if (!record || now > record.resetTime) {
    ipRequestMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true };
  }

  record.count += 1;

  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.max(1, Math.ceil((record.resetTime - now) / 1000));
    return { allowed: false, retryAfter };
  }

  return { allowed: true };
}

/**
 * Kiểm tra kích thước Payload để chống tấn công Payload Bomb làm tràn RAM (OOM)
 */
export function checkPayloadSize(request: Request): boolean {
  const method = request.method.toUpperCase();
  if (method === "POST" || method === "PUT" || method === "PATCH") {
    const contentLength = request.headers.get("content-length");
    if (contentLength) {
      const bytes = parseInt(contentLength, 10);
      if (!isNaN(bytes) && bytes > MAX_PAYLOAD_BYTES) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Chèn các HTTP Security Headers tiêu chuẩn vào phản hồi
 */
export function applySecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);

  // Chống MIME-type sniffing
  headers.set("X-Content-Type-Options", "nosniff");
  // Chống nhúng iframe (Clickjacking)
  headers.set("X-Frame-Options", "SAMEORIGIN");
  // Bật bộ lọc XSS của trình duyệt
  headers.set("X-XSS-Protection", "1; mode=block");
  // Bảo vệ thông tin nguồn chuyển tiếp
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // Giới hạn quyền truy cập tính năng thiết bị
  headers.set("Permissions-Policy", "geolocation=(), camera=(), microphone=()");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
