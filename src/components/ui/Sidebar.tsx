"use client";
import { CoinsIcon, Home, Layers2Icon, ShieldCheckIcon } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./button";
import { usePathname } from "next/navigation";

export const routes = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

const DesktopSidebar = () => {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href)
    ) ?? routes[0];
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDIT</div>
      <div className="flex flex-col p-2 gap-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarItemActive"
                  : "sidebarItem",
            })}
            href={route.href}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
