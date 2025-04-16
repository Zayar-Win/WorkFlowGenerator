import { TaskParamType } from "@/lib/helpers/TaskType";
import { TaskParam } from "@/lib/types";
import React, { useCallback } from "react";
import StringParam from "./params/StringParam";
import { useReactFlow } from "@xyflow/react";
import { AppNode } from "@/components/appNode";

type Props = {
  param: TaskParam;
  nodeId: string;
};

const NodeParamsField = ({ param, nodeId }: Props) => {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data?.inputs?.[param.name];
  const updateNodeParamsValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node.data?.inputs,
          [param.name]: newValue,
        },
      });
    },
    [updateNodeData, nodeId, param.name, node?.data?.inputs]
  );
  switch (param.type) {
    case TaskParamType.STRING:
      return (
        <StringParam
          param={param}
          value={value}
          updateNodeParamsValue={updateNodeParamsValue}
        />
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
};

export default NodeParamsField;
