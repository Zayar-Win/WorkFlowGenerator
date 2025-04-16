import { TaskParamType, TaskType } from "@/lib/helpers/TaskType";
import { LucideProps, GlobeIcon } from "lucide-react";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "Launch Browser",
  icon: (props: LucideProps) => {
    return <GlobeIcon className="stroke-pink-500" {...props} />;
  },
  isEntryPoint: true,
  inputs: [
    {
      name: "Website URL",
      type: TaskParamType.STRING,
      helperText: "eg: www.google.com",
      required: true,
      hideHandle: true,
    },
  ],
};
