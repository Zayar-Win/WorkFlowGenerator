import { TaskType } from "@/lib/helpers/TaskType";
import { Node } from "@xyflow/react";
import React from "react";

// AppNodeData interface defines the structure of data for an application node
export interface AppNodeData {
  // Specifies the type of task this node represents
  type: TaskType;
  // Defines input parameters as key-value pairs of strings
  input: Record<string, string>;
  // Allows for additional dynamic properties of any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// AppNode interface extends the base Node type from @xyflow/react
// and specifies that its data property must conform to AppNodeData
export interface AppNode extends Node {
  data: AppNodeData;
}

const AppNode = ({}: AppNode) => {
  return <div>appNode</div>;
};

export default AppNode;
