import { cn } from "@/lib/utils";
import { useReactFlow } from "@xyflow/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  nodeId: string;
  isSelected: boolean;
};

const NodeCard = ({ children, nodeId, isSelected }: Props) => {
  const { getNode, setCenter } = useReactFlow();
  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) return;

        const { position, measured } = node;
        const { width = 0, height = 0 } = measured ?? {};
        const x = position.x + width / 2;
        const y = position.y + height / 2;
        if (
          x == undefined ||
          y == undefined ||
          width == undefined ||
          height == undefined
        )
          return;

        setCenter(x, y, {
          zoom: 1,
          duration: 500,
        });
      }}
      className={cn(
        "rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col",
        isSelected && "border-emerald-500"
      )}
    >
      {children}
    </div>
  );
};

export default NodeCard;
