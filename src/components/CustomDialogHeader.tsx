import { LucideIcon } from "lucide-react";
import React from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

type Props = {
  title?: string;
  subTitle?: string;
  icon: LucideIcon;
  titleClassName?: string;
  subTitleClassName?: string;
  iconClassName?: string;
};

const CustomDialogHeader = ({
  title,
  subTitle,
  icon,
  titleClassName,
  subTitleClassName,
  iconClassName,
}: Props) => {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col gap-2  items-center mb-2">
          {React.createElement(icon, {
            size: 30,
            className: cn("stroke-emerald-500", iconClassName),
          })}
          {title && (
            <p className={cn("text-xl text-emerald-500", titleClassName)}>
              {title}
            </p>
          )}
          {subTitle && (
            <p
              className={cn("text-sm text-muted-foreground", subTitleClassName)}
            >
              {subTitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
};

export default CustomDialogHeader;
