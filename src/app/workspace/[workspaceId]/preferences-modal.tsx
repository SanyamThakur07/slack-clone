import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDeleteWorkspace } from "@/features/workspaces/api/useRemoveWorkspace";
import { useUpdateWorkspace } from "@/features/workspaces/api/useUpdateWorkspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PreferencesModalProps {
  initialValue: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PreferencesModal = ({
  initialValue,
  open,
  setOpen,
}: PreferencesModalProps) => {
  const [editOpen, setEditOpen] = useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: initialValue,
    },
  });

  const workspaceId = useWorkspaceId();
  const value = form.watch("name");

  const updateWorkspace = useUpdateWorkspace();
  const removeWorkspace = useDeleteWorkspace();

  const handleClose = () => {
    setOpen(false);
    form.reset;
  };

  const handleUpdateWorkspace = form.handleSubmit(async ({ name }) => {
    try {
      await updateWorkspace.mutate({
        id: workspaceId,
        name,
      });
      setEditOpen(false);
      toast.success("Workspace updated");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update workspace");
    }
  });

  const handleRemoveWorkspace = async () => {
    try {
      await removeWorkspace.mutate({
        id: workspaceId,
      });
      router.replace("/");
      toast.success("Worksapce removed");
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove workspace");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{initialValue}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger asChild>
                <div className="cursor-pointer rounded-lg border bg-white px-5 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">Workspace Name</p>
                    <p className="text-sm font-semibold text-[#1264A3] hover:underline">
                      Edit
                    </p>
                  </div>
                  <p className="flex justify-start text-sm font-semibold">
                    {value}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename this workspace</DialogTitle>
                </DialogHeader>
                <form className="spce-y-4" onSubmit={handleUpdateWorkspace}>
                  <Input
                    {...form.register("name", {
                      required: true,
                      minLength: 3,
                      maxLength: 80,
                    })}
                    autoFocus
                    disabled={updateWorkspace.isPending}
                    placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                  />
                  <DialogFooter className="mt-3">
                    <DialogClose>
                      <Button
                        className="cursor-pointer"
                        variant={"outline"}
                        disabled={updateWorkspace.isPending}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      className="cursor-pointer"
                      type="submit"
                      disabled={updateWorkspace.isPending}
                    >
                      Save
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <button
              onClick={handleRemoveWorkspace}
              className="flex cursor-pointer items-center justify-between rounded-lg border bg-white px-5 py-4 text-rose-600 hover:bg-red-50"
            >
              <p className="text-sm font-semibold">Delete Workspace</p>
              <TrashIcon className="size-5 text-rose-600" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PreferencesModal;
