"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useLayoutStore } from "@/store/layout-store";
import Sidebar from "./Sidebar";
import AppBar from "./AppBar";
import MobileSidebar from "./MobileSidebar";

function subscribeToMediaQuery(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useLayoutStore((s) => s.theme);
  const prefersDark = useSyncExternalStore(
    subscribeToMediaQuery,
    getPrefersDark,
    getServerSnapshot,
  );

  const resolvedTheme =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  return (
    <div className="flex min-h-dvh w-full bg-background text-foreground">
      {/* <Sidebar /> */}
      <div className="flex min-w-0 flex-1 flex-col">
        <AppBar />
        {/* <main className="flex flex-1 flex-col">{children}</main> */}
        <div className="flex  w-full">
          <Sidebar /> 
          <main className="flex flex-1 flex-col max-h-[calc(100vh-100px)]">{children}</main>
        </div>
        {/* <main className="flex flex-1 flex-col">{children}</main> */}
      </div>
      <MobileSidebar />
    </div>
  );
}
