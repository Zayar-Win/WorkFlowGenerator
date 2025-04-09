"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Logo from "./ui/Logo";
import { usePathname } from "next/navigation";
import { routes } from "./ui/Sidebar";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type Props = {};

const MobileSidebar = (props: Props) => {
  const pathName = usePathname();
  const [open, setOpen] = React.useState(false);
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href)
    ) ?? routes[0];
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <Logo />
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
                  onClick={() => setOpen(false)}
                  href={route.href}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default MobileSidebar;
