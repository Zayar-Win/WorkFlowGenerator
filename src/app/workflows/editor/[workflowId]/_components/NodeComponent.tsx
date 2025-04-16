import { NodeProps } from "@xyflow/react";
import React, { memo } from "react";
import NodeCard from "./NodeCard";

const NodeComponent = memo((props: NodeProps) => {
  return (
    <NodeCard nodeId={props.id}>
      {props.data.elements.map((element, index) => {
        return (
          <div key={index}>
            {element.type === "text" && <input type="text" value />}
            {element.type === "image" && <img src="" alt="" />}
          </div>
        );
      })}
    </NodeCard>
  );
});
export default NodeComponent;

NodeComponent.displayName = "NodeComponent"; // for react devtools profil
