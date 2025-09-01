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
import { Id } from "../../../../convex/_generated/dataModel";

const CreateGroupModal = () => {
  const router = useRouter();

  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutateAsync, isPending } = useCreateWorkspace();

  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  const handleCreateWorkspace = form.handleSubmit(async ({ name }) => {
    const workspaceId: Id<"workspaces"> = await mutateAsync({ name });
    toast.success("Workspace created");
    router.push(`/workspace/${workspaceId}`);
    handleClose();
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
