import { Workflow } from "@/generated/prisma";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import Topbar from "@/app/workflows/editor/[workflowId]/_components/topbar/topbar";
import SideMenu from "@/app/workflows/editor/[workflowId]/_components/SideMenu";

type Props = {
  workflow: Workflow;
};

const Editor = ({ workflow }: Props) => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar
          workflowId={workflow.id}
          title="WorkFlow Editor"
          subTitile={workflow.name}
        />
        <section className="flex h-full overflow-auto">
          <SideMenu />
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
