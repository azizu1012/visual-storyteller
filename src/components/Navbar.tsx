import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Home,
  Landmark,
  Milestone,
  Award,
  Scale,
  Image as ImageIcon,
  Layers,
  ChevronRight,
  Sparkles,
  BookOpen,
  Smartphone,
  Monitor,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { NAVIGATION_ITEMS } from "./navigation-items";

export function Navbar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Tư tưởng Hồ Chí Minh
            </div>
            <div className="eyebrow text-[0.65rem] text-muted-foreground">
              Di sản & Thời đại · Chuyên đề 2
            </div>
          </div>
        </Link>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentPath === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode toggle button (Desktop / Mobile) */}
          {currentPath === "/m" ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 rounded-lg border-border/80 text-xs text-muted-foreground hover:text-foreground active:scale-95"
            >
              <Link to="/">
                <Monitor className="size-3.5" />
                <span className="font-medium">Desktop</span>
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 rounded-lg border-accent/40 bg-accent/5 text-xs text-foreground hover:bg-accent/15 hover:border-accent active:scale-95"
            >
              <Link to="/m">
                <Smartphone className="size-3.5 text-primary" />
                <span className="font-medium">Mobile</span>
              </Link>
            </Button>
          )}

          {/* Hamburger Sheet Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              >
                <Menu className="h-4 w-4" />
                <span className="font-medium text-xs">Mục lục</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:max-w-md p-0 flex flex-col justify-between bg-card text-card-foreground border-l border-border"
            >
              <div className="overflow-y-auto p-6 space-y-6">
                <SheetHeader className="text-left space-y-2 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="eyebrow text-gold text-[0.68rem]">Chỉ mục chuyên đề</span>
                  </div>
                  <SheetTitle className="font-display text-2xl font-bold text-foreground">
                    Danh mục nội dung
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Khám phá các chuyên đề nghiên cứu về tư tưởng Hồ Chí Minh với hình ảnh và tư
                    liệu tương tác.
                  </p>
                </SheetHeader>

                {/* Clear Indexed Navigation (No 2.1 or 2.2) */}
                <div className="space-y-2">
                  {NAVIGATION_ITEMS.map((item, index) => {
                    const isActive = currentPath === item.to;
                    const Icon = item.icon;
                    return (
                      <SheetClose asChild key={item.to}>
                        <Link
                          to={item.to}
                          className={`group flex items-start gap-3.5 rounded-xl p-3.5 transition-all border ${
                            isActive
                              ? "border-primary/40 bg-primary/5 shadow-sm"
                              : "border-transparent hover:border-border hover:bg-secondary/50"
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            }`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="text-[0.7rem] font-bold text-muted-foreground/80 font-mono">
                                  {String(index + 1).padStart(2, "0")}.
                                </span>
                                <h4
                                  className={`text-sm font-semibold truncate ${
                                    isActive
                                      ? "text-primary font-bold"
                                      : "text-foreground group-hover:text-primary"
                                  }`}
                                >
                                  {item.title}
                                </h4>
                              </div>
                              <Badge
                                variant={isActive ? "default" : "secondary"}
                                className="text-[0.65rem] px-1.5 py-0 shrink-0"
                              >
                                {item.tag}
                              </Badge>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <ChevronRight
                            className={`h-4 w-4 shrink-0 mt-2.5 transition-transform ${
                              isActive
                                ? "text-primary translate-x-0.5"
                                : "text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1"
                            }`}
                          />
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-border bg-secondary/30 space-y-4">
                {/* Mode switcher */}
                <div className="rounded-xl border border-border/70 bg-card p-3 shadow-xs">
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Chế độ hiển thị</span>
                    <span className="text-[10px] text-accent font-normal font-sans">Đa độ phân giải</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <SheetClose asChild>
                      <Link
                        to="/"
                        className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium border transition-all active:scale-95 ${
                          currentPath !== "/m"
                            ? "bg-primary text-primary-foreground border-primary shadow-xs"
                            : "bg-secondary/60 text-muted-foreground border-transparent hover:text-foreground"
                        }`}
                      >
                        <Monitor className="size-3.5" />
                        <span>Desktop</span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/m"
                        className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium border transition-all active:scale-95 ${
                          currentPath === "/m"
                            ? "bg-primary text-primary-foreground border-primary shadow-xs"
                            : "bg-secondary/60 text-muted-foreground border-transparent hover:text-foreground"
                        }`}
                      >
                        <Smartphone className="size-3.5" />
                        <span>Mobile</span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Visual Storyteller Web App
                  </span>
                  <span className="font-mono text-[0.7rem]">React 19 · Vite</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
