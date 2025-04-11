"use server";

import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const deleteWorkflow = async (id: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.workflow.delete({
    where: {
      id,
    },
  });

  return {
    message: "Workflow deleted successful.",
  };
};
