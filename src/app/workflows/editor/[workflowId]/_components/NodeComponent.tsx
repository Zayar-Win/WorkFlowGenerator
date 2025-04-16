import { NodeProps } from "@xyflow/react";
import React, { memo } from "react";
import NodeCard from "./NodeCard";
import NodeHeader from "./NodeHeader";
import { AppNodeData } from "@/components/appNode";
import NodeInputs, { NodeInput } from "./NodeInputs";
import { TaskRegistry } from "@/lib/workflow/task/Registry";

const NodeComponent = memo((props: NodeProps) => {
  const data = props.data as AppNodeData;
  const task = TaskRegistry[data.type];
  console.log(data);
  return (
    <NodeCard nodeId={props.id} isSelected={props.selected}>
      <NodeHeader taskType={data.type} />
      <NodeInputs>
        {task.inputs.map((input) => (
          <NodeInput nodeId={props.id} input={input} key={input.name} />
        ))}
      </NodeInputs>
    </NodeCard>
  );
});
export default NodeComponent;

NodeComponent.displayName = "NodeComponent"; // for react devtools profil
