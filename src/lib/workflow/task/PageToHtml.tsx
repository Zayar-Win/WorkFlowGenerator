import { TaskParamType, TaskType } from "@/lib/helpers/TaskType";
import { LucideProps, CodeIcon } from "lucide-react";

export const PageToHtml = {
  type: TaskType.LAUNCH_BROWSER,
  label: "Get html from page",
  icon: (props: LucideProps) => {
    return <CodeIcon className="stroke-pink-500" {...props} />;
  },
  isEntryPoint: true,
  inputs: [
    {
      name: "Web Page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
};
