"use client";
import ToolTipWrapper from "@/components/ToolTipWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveButton from "./SaveButton";

type Props = {
  title: string;
  subTitile?: string;
  workflowId: string;
};

const Topbar = ({ title, subTitile, workflowId }: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center p-2 border-b-2 border-separate justify-between w-full h-[60px] sticky top-0 bg-backgound z-10">
      <div className="flex gap-1 flex-1 items-center">
        <ToolTipWrapper content="Back">
          <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
            <ChevronLeftIcon size={20} />
          </Button>
        </ToolTipWrapper>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subTitile && (
            <p className="text-sm text-muted-foreground truncate text-ellipsis ">
              {subTitile}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-1 flex-1 justify-end">
        <SaveButton workflowId={workflowId} />
      </div>
    </div>
  );
};

export default Topbar;
