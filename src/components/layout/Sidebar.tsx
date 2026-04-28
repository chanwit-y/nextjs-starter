"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutStore } from "@/store/layout-store";
import Icon from "@/components/common/Icon";
import { useCallback, useEffect, useRef, useState, type ComponentType, type MouseEvent, type SVGProps } from "react";

type NavItem = {
  href: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", Icon: Icon.Home },
  { href: "/analytics", label: "Analytics", Icon: Icon.Chart },
  { href: "/users", label: "Users", Icon: Icon.Users },
  { href: "/settings", label: "Settings", Icon: Icon.Settings },
];

function useRipple<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const trigger = useCallback((e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;
      width:${size}px;height:${size}px;border-radius:50%;
      background:currentColor;opacity:0.15;
      transform:scale(0);pointer-events:none;
      animation:sidebar-ripple 500ms ease-out forwards;
    `;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);

  return { ref, trigger };
}

export default function Sidebar() {
  const collapsed = useLayoutStore((s) => s.sidebarCollapsed);
  const toggleSidebar = useLayoutStore((s) => s.toggleSidebar);
  const pathname = usePathname();
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [collapsed]);

  return (
    <aside
      data-collapsed={collapsed}
      className="hidden h-[calc(100vh-56px)] shrink-0 border-r border-border bg-surface transition-[width] duration-200 ease-out md:flex md:flex-col data-[collapsed=true]:w-16 data-[collapsed=false]:w-60"
    >
   

      <nav className="flex flex-1 flex-col gap-1 p-2 my-2">
        {NAV_ITEMS.map(({ href, label, Icon }, index) => (
          <NavLink
            key={`${href}-${animKey}`}
            href={href}
            label={label}
            Icon={Icon}
            collapsed={collapsed}
            active={href === "/" ? pathname === "/" : pathname.startsWith(href)}
            index={index}
          />
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div
          data-collapsed={collapsed}
          className="flex items-center gap-3 justify-end data-[collapsed=true]:justify-center"
        >
         
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={toggleSidebar}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground"
          >
            <span
              className={`inline-flex transition-transform duration-300 ease-in-out ${collapsed ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`}
            >
              <Icon.PanelLeftClose className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes sidebar-ripple{to{transform:scale(1);opacity:0}}
        @keyframes sidebar-enter{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
      `}</style>
    </aside>
  );
}

function NavLink({
  href,
  label,
  Icon,
  collapsed,
  active,
  index,
}: NavItem & { collapsed: boolean; active: boolean; index: number }) {
  const { ref, trigger } = useRipple<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      href={href}
      title={collapsed ? label : undefined}
      data-active={active}
      data-collapsed={collapsed}
      onClick={trigger}
      style={{
        animation: `sidebar-enter 400ms ease-out ${index * 60}ms both`,
      }}
      className="group relative flex h-9 items-center gap-3 overflow-hidden rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-strong hover:text-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground data-[collapsed=true]:justify-center data-[collapsed=true]:px-0 data-[collapsed=true]:gap-0"
    >
      <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:scale-125" />
      {!collapsed && <span className="truncate transition-transform duration-200 ease-out group-hover:translate-x-0.5">{label}</span>}
    </Link>
  );
}
