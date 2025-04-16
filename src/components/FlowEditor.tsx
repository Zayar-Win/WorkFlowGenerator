"use client";
import { Workflow } from "@/generated/prisma";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import React, { useCallback, useEffect } from "react";

import "@xyflow/react/dist/style.css";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/lib/helpers/TaskType";
import NodeComponent from "@/app/workflows/editor/[workflowId]/_components/NodeComponent";

type Props = {
  workflow: Workflow;
};

const nodeTypes = {
  Node: NodeComponent,
};

const snapGrid: [number, number] = [50, 50];
const fitViewOptions = {
  padding: 0.5,
};

const FlowEditor = ({ workflow }: Props) => {
  const { setViewport, screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([
    createFlowNode(TaskType.LAUNCH_BROWSER),
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  useEffect(() => {
    const flow = JSON.parse(workflow.definition);
    if (!flow) return;
    setNodes(flow.nodes || []);
    setEdges(flow.edges || []);
    if (!flow.viewport) return;
    const { x = 0, y = 0, zoom = 1 } = flow.viewport;
    setViewport({ x, y, zoom });
  }, [workflow.definition, setNodes, setEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);
  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const taskType = event.dataTransfer.getData("application/reactflow");
    if (typeof taskType == undefined || !taskType) return;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = createFlowNode(taskType as TaskType, position);
    setNodes((nds) => nds.concat(newNode));
  }, []);

  return (
    <div className="w-full h-full ">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapGrid={snapGrid}
        snapToGrid={true}
        fitViewOptions={fitViewOptions}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
