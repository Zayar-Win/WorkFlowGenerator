import { AppNode } from "@/components/appNode";
import { TaskType } from "../helpers/TaskType";

export function createFlowNode(
  nodeType: TaskType,
  position?: { x: number; y: number }
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "Node",
    data: {
      type: nodeType,
      input: {},
    },
    position: position ?? { x: 0, y: 0 },
  };
}
