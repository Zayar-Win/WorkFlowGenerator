import { Workflow } from "@/generated/prisma";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WorkflowStatus } from "@/lib/types";
import { FileTextIcon, PlayIcon, ShuffleIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import WorkFlowActions from "./WorkFlowActions";

type Props = {
  workflow: Workflow;
};

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
  [WorkflowStatus.PUBLISHED]: "bg-emerald-500",
};

const WorkflowCard = async ({ workflow }: Props) => {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent className="p-4 flex h-[100px] items-center justify-between">
        <div className="flex items-center justify-end space-x-3">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              statusColors[workflow.status as WorkflowStatus]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="w-5 h-5 text-white" />
            )}
          </div>
          <div>
            <h1 className="text-base font-bold text-muted-foreground flex items-center">
              <Link
                href={`/workflows/editor/${workflow.id}`}
                className="flex items-center hover:underline"
              >
                {workflow.name}
              </Link>
              {isDraft && (
                <span className="ml-2 px-3 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Draft
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              })
            )}
            href={`/workflows/editor/${workflow.id}`}
          >
            <ShuffleIcon size={16} />
            Edit
          </Link>
          <WorkFlowActions
            workflowId={workflow.id}
            workflowName={workflow.name}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;
