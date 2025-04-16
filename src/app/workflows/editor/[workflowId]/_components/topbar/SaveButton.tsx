"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
import { CheckIcon } from "lucide-react";
import React from "react";
import { updateWorkflow } from "../../../../../../../actions/workflows/updateWorkflow";
import { toast } from "sonner";

const SaveButton = ({ workflowId }: { workflowId: string }) => {
  const { toObject } = useReactFlow();

  const { mutate } = useMutation({
    mutationFn: async (data: { workflowId: string; definition: string }) => {
      return await updateWorkflow(data.workflowId, data.definition);
    },
    onSuccess: () => {
      toast.success("Workflow saved");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-2"
      onClick={() => {
        const workflowDefinition = JSON.stringify(toObject());
        toast.loading("Saving workflow...");
        mutate({
          workflowId,
          definition: workflowDefinition,
        });
      }}
    >
      <CheckIcon className="stroke-emerald-500" />
      Save
    </Button>
  );
};

export default SaveButton;
