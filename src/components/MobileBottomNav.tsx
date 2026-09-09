import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Landmark,
  Milestone,
  Scale,
  Image as ImageIcon,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface MobileBottomNavProps {
  className?: string;
}

export function MobileBottomNav({ className }: MobileBottomNavProps) {
  const currentPath = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isMobileDedicated = currentPath.startsWith("/m");

  const navItems = [
    {
      to: isMobileDedicated ? "/m" : "/",
      label: "Trang chủ",
      icon: Home,
      isActive: currentPath === "/" || currentPath === "/m",
    },
    {
      to: "/co-so-hinh-thanh",
      label: "Cơ sở",
      icon: Landmark,
      isActive: currentPath === "/co-so-hinh-thanh",
    },
    {
      to: "/qua-trinh-phat-trien",
      label: "1911-1969",
      icon: Milestone,
      isActive: currentPath === "/qua-trinh-phat-trien",
    },
    {
      to: "/luan-ban",
      label: "Luận bàn",
      icon: Scale,
      isActive: currentPath === "/luan-ban",
    },
    {
      to: "/tu-lieu-anh",
      label: "Ảnh tư liệu",
      icon: ImageIcon,
      isActive: currentPath === "/tu-lieu-anh",
    },
    {
      to: isMobileDedicated ? "/" : "/m",
      label: isMobileDedicated ? "Bản Web" : "Bản /m",
      icon: Smartphone,
      isActive: isMobileDedicated,
      isSpecial: true,
    },
  ];

  return (
    <nav
      aria-label="Điều hướng nhanh trên thiết bị di động"
      className={cn(
        "sm:hidden fixed bottom-3 left-3 right-3 z-40 mx-auto max-w-md",
        className,
      )}
    >
      <div className="flex items-center justify-between rounded-2xl border border-border/80 bg-card/95 p-1.5 shadow-xl backdrop-blur-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={cn(
                "relative flex flex-1 flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[10px] font-medium transition-all duration-150 active:scale-90",
                item.isActive
                  ? item.isSpecial
                    ? "text-accent font-semibold"
                    : "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.isActive && (
                <motion.div
                  layoutId="mobile-bottom-indicator"
                  className="absolute inset-0 rounded-xl bg-secondary/70 -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <Icon
                className={cn(
                  "size-5 transition-transform duration-200",
                  item.isActive && "scale-110",
                )}
              />
              <span className="mt-0.5 tracking-tight truncate max-w-[54px]">
                {item.label}
              </span>
              {item.isSpecial && (
                <span className="absolute -top-1 right-2 size-2 rounded-full bg-accent animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
