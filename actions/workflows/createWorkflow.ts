"use server";

import db from "@/lib/db";
import { WorkflowStatus } from "@/lib/types";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/createWorkflowSchema";
import { auth } from "@clerk/nextjs/server";

export const createWorkflow = async (values: CreateWorkflowSchemaType) => {
  const success = createWorkflowSchema.safeParse(values);
  if (!success) {
    throw new Error("Invalid data");
  }

  const { userId } = await auth();

  if (!userId) {
    throw new Error("UnAuthorized");
  }

  const workflow = await db.workflow.create({
    data: {
      userId,
      name: values.name,
      description: values.description,
      status: WorkflowStatus.DRAFT,
      definition: "hello",
    },
  });

  return workflow;
};
