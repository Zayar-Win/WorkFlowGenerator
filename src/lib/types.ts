import { TaskParamType } from "./helpers/TaskType";

export enum WorkflowStatus {
  DRAFT = "Draft",
  PUBLISHED = "Published",
}

export interface TaskParam {
  name: string;
  type: TaskParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

