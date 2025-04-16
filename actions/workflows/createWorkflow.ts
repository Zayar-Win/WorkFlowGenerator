"use server";

import { AppNode } from "@/components/appNode";
import db from "@/lib/db";
import { TaskType } from "@/lib/helpers/TaskType";
import { WorkflowStatus } from "@/lib/types";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/createWorkflowSchema";
import { auth } from "@clerk/nextjs/server";
import { Edge } from "@xyflow/react";

export const createWorkflow = async (values: CreateWorkflowSchemaType) => {
  const success = createWorkflowSchema.safeParse(values);
  if (!success) {
    throw new Error("Invalid data");
  }

  const { userId } = await auth();

  const initialWorkflow: { nodes: AppNode[]; edges: Edge[] } = {
    nodes: [],
    edges: [],
  };

  initialWorkflow.nodes.push(createFlowNode(TaskType.LAUNCH_BROWSER));
  if (!userId) {
    throw new Error("UnAuthorized");
  }

  const workflow = await db.workflow.create({
    data: {
      userId,
      name: values.name,
      description: values.description,
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initialWorkflow),
    },
  });

  return workflow;
};
