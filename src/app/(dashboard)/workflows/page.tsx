import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";
import UserWorkflows from "./_components/UserWorkflows";
import CreateWorkflowDialog from "./_components/CreateWorkflowDialog";

const Page = async () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-sm text-muted-foreground">Manage your workflow</p>
        </div>
        <CreateWorkflowDialog />
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
};

const UserWorkflowsSkeleton = async () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton className="h-32 w-full" key={i} />
      ))}
    </div>
  );
};

export default Page;
