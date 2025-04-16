import React from "react";

type Props = {
  children: React.ReactNode;
  nodeId: string;
};

const NodeCard = ({ children, nodeId }: Props) => {
  return (
    <div>
      {children} {nodeId}
    </div>
  );
};

export default NodeCard;
