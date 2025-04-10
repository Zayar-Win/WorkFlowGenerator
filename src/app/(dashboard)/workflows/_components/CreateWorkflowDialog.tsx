"use client";
import React, { useCallback, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Layers2Icon, Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/createWorkflowSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { createWorkflow } from "../../../../../actions/workflows/createWorkflow";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
type Props = {
  triggerText?: string;
};

const CreateWorkflowDialog = ({ triggerText = "Create Workflow" }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm<CreateWorkflowSchemaType>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createWorkflow,
    onSuccess: (data) => {
      toast.success("Workflow created successfully", {
        id: "workflow-created",
      });
      // Using window.location.href instead of redirect
      // because redirect is a server-side function
      router.push(`/workflows/editor/${data.id}`);
    },
    onError: (error) => {
      toast.error(error.message, {
        id: "workflow-created",
      });
    },
  });

  const onSubmit = useCallback(
    (values: CreateWorkflowSchemaType) => {
      mutate(values);
    },
    [mutate]
  );

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(value) => {
          form.reset();
          setOpen(value);
        }}
      >
        <DialogTrigger>
          <div
            className={`${buttonVariants({
              variant: "sidebarItemActive",
            })} !bg-emerald-500 cursor-pointer`}
          >
            {triggerText}
          </div>
        </DialogTrigger>
        <DialogContent>
          <CustomDialogHeader
            icon={Layers2Icon}
            title="Create Workflow"
            subTitle="Create a new workflow"
          />
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="!text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0"
                          placeholder="Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={"sidebarItemActive"}
                  disabled={isPending}
                >
                  {isPending ? (
                    <div className="flex items-center gap-2">
                      <Loader2Icon className="animate-spin" />
                      <span>Creating...</span>
                    </div>
                  ) : (
                    "Create"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateWorkflowDialog;
