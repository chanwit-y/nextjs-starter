"use client";

import Image from "next/image";
import Icon from "@/components/common/Icon";
import ThemeToggle from "./ThemeToggle";
import logo from "@/asset/logo.png";

export default function AppBar() {
  return (
    <header className="sticky top-0 pr-3 z-30 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex flex-1 h-14 items-center gap-2 px-4">
        <Image src={logo} alt="Logo" width={42} height={42} className="shrink-0 rounded-lg" />
        <span className="truncate mt-1 text-lg font-semibold text-foreground">
          Synapse-i
        </span>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
