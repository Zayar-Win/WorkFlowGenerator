import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { getWorkflowsForUser } from "../../../../../actions/workflows/getWorkflowsForUser";
import { AlertCircle, InboxIcon } from "lucide-react";
import CreateWorkflowDialog from "./CreateWorkflowDialog";
import WorkflowCard from "./WorkflowCard";

const UserWorkflows = async () => {
  try {
    const workflows = await getWorkflowsForUser();

    if (workflows.length === 0) {
      return (
        <div className="flex flex-col gap-4 h-full items-center justify-center">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-emerald-500" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">N0 Workflow created yet.</p>
            <p className="text-sm text-muted-foreground">
              Click the button below to create your first workflow
            </p>
          </div>
          <CreateWorkflowDialog />
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-6">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    );
  } catch (e) {
    console.log(e);
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong, please try again later.
        </AlertDescription>
      </Alert>
    );
  }
  //   if (!workflows) {
  //   }
  return <div>UserWorkflows</div>;
};

export default UserWorkflows;
