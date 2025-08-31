import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { useCreateWorkspaceModal } from "../store/useCreateWorkspaceModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/useCreateWorkspace";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateGroupModal = () => {
  const router = useRouter();

  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutate, isPending } = useCreateWorkspace();

  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const handleCreateWorkspace = form.handleSubmit(({ name }) => {
    mutate(
      { name },
      {
        onSuccess: (workspaceId) => {
          toast.success("Workspace Created");
          router.push(`/workspace/${workspaceId}`);
          handleClose();
        },
        onError: (error) => {
          toast.error("Failed to create workspace");
          console.error(error);
        },
      },
    );
  });

  const handleClose = () => {
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Add a Workspace </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateWorkspace} className="mt-2 space-y-3">
          <Input
            {...form.register("name", {
              required: true,
              minLength: 3,
            })}
            disabled={isPending}
            autoFocus
            placeholder="Workspace name e.g 'Work', 'Home', 'Personal'"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroupModal;
