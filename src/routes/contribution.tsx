import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectContribution } from "@/components/ProjectContribution";

export const Route = createFileRoute("/contribution")({
  head: () => ({
    meta: [
      { title: "Phân công & Đóng góp dự án · Visual Storyteller" },
      {
        name: "description",
        content:
          "Bảng phân công nhiệm vụ và đóng góp phát triển website Visual Storyteller: Vai trò chủ đạo của con người (Lead Developer, Biên soạn nội dung) và năng lực hỗ trợ của AI (Human-AI Collaboration).",
      },
    ],
  }),
  component: ContributionPage,
});

function ContributionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <Button asChild variant="ghost" size="sm" className="gap-2 text-xs text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Về trang chủ</span>
          </Link>
        </Button>
        <span className="text-xs font-mono text-muted-foreground">
          Visual Storyteller · Attribution
        </span>
      </div>

      <ProjectContribution />
    </div>
  );
}
