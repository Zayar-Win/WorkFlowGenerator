"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolTipWrapper from "@/components/ToolTipWrapper";
import DeleteWorkflowDialog from "./DeleteWorkflowDialog";

type Props = {
  workflowId: string;
  workflowName: string;
};

const WorkFlowActions = ({ workflowId, workflowName }: Props) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  return (
    <>
      <DeleteWorkflowDialog
        workflowId={workflowId}
        setOpen={setDeleteDialogOpen}
        workflowName={workflowName}
        open={deleteDialogOpen}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"sm"} className="relative px-4">
            <ToolTipWrapper content="More Actions">
              <div className="w-full absolute top-0 left-0  h-full flex items-center justify-center ">
                <MoreVerticalIcon size={18} />
              </div>
            </ToolTipWrapper>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              setDeleteDialogOpen(true);
            }}
            className="flex group items-center gap-3 text-red-500"
          >
            <Trash2Icon
              size={16}
              className="text-red-500 group-hover:text-black"
            />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WorkFlowActions;
