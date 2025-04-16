import { TaskParam } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Handle, Position } from "@xyflow/react";
import React from "react";
import NodeParamsField from "./NodeParamsField";

type Props = {
  children: React.ReactNode;
};

const NodeInputs = ({ children }: Props) => {
  return <div className="flex flex-col gap-2 divide-y">{children}</div>;
};

export default NodeInputs;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NodeInput({
  input,
  nodeId,
}: {
  input: TaskParam;
  nodeId: string;
}) {
  return (
    <div className="relative flex justify-start p-3 bg-secondary w-full">
      <NodeParamsField nodeId={nodeId} param={input} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-background !w-4 !h-4 !-left-2"
          )}
        />
      )}
    </div>
  );
}
