"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { deleteWorkflow } from "../../../../../actions/workflows/deleteWorkflow";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  workflowName: string;
  workflowId: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteWorkflowDialog = ({
  workflowId,
  workflowName,
  open,
  setOpen,
}: Props) => {
  const [confirmText, setConfirmText] = React.useState("");
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteWorkflow,
    onSuccess: (data) => {
      toast.success(data.message);
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              If you delete this workflow , you will note be able to recover it.
              <div className="flex flex-col py-4 gap-2">
                <p>
                  If you are sure, enter <b>{workflowName} to confirm:</b>
                </p>
                <Input
                  placeholder={workflowName}
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => mutate(workflowId)}
            className="bg-red-500 text-white"
            disabled={confirmText !== workflowName}
          >
            {isPending ? "Deleting" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkflowDialog;
