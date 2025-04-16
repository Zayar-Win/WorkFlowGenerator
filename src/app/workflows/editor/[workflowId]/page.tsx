import Editor from "@/components/Editor";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type PageProps = {
  params: Promise<{
    workflowId: string;
  }>;
};
const Page = async ({ params }: PageProps) => {
  const { workflowId } = await params;
  const { userId } = await auth();

  if (!userId) {
    return <div>Not authorized</div>;
  }

  const workflow = await db.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });
  if (!workflow) {
    return <div>Workflow not found</div>;
  }

  return <Editor workflow={workflow} />;
};

export default Page;
