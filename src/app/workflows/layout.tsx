import { ModeToggle } from "@/components/ModeToggle";
import Logo from "@/components/ui/Logo";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <div className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Layout;
