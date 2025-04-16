"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TaskType } from "@/lib/helpers/TaskType";
import { TaskRegistry } from "@/lib/workflow/task/Registry";
import { CoinsIcon, GripVerticalIcon } from "lucide-react";
import React from "react";

type Props = {
  taskType: TaskType;
};

const NodeHeader = ({ taskType }: Props) => {
  const task = TaskRegistry[taskType];
  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon size={16} />
      <div className="flex justify-between items-center w-full">
        <p className="text-xs font-bold uppercase text-muted-foreground">
          {task.label}
        </p>
        <div className="flex gap-1 items-center">
          {task.isEntryPoint && <Badge>Entry Point</Badge>}
          <Badge className="!text-xs">
            <CoinsIcon size={16} />
            TODO
          </Badge>
          <Button
            className="drag-handle cursor-grab"
            variant={"ghost"}
            size={"icon"}
          >
            <GripVerticalIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeHeader;
