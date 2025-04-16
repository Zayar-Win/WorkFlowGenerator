import { NodeProps } from "@xyflow/react";
import React, { memo } from "react";
import NodeCard from "./NodeCard";

const NodeComponent = memo((props: NodeProps) => {
  return <NodeCard nodeId={props.id}>hello</NodeCard>;
});
export default NodeComponent;

NodeComponent.displayName = "NodeComponent"; // for react devtools profil
