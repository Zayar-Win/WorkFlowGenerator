"use server";

import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function updateWorkflow(workflowId: string, definition: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const workflow = await db.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("Workflow not found");
  }

  await db.workflow.update({
    where: {
      id: workflowId,
    },
    data: {
      definition,
    },
  });
}
