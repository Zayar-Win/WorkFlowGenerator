import { Loader2Icon } from "lucide-react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2Icon className="animate-spin stroke-emerald-500" />
    </div>
  );
};

export default loading;
