import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspaces/api/useGetWorkspace";
import { useGetWorkspaces } from "@/features/workspaces/api/useGetWorkspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/useCreateWorkspaceModal";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const WorkspaceSwitcher = () => {
  const router = useRouter();

  const [_open, setOpen] = useCreateWorkspaceModal();
  const workspaceId = useWorkspaceId();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });
  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace._id !== workspaceId,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 cursor-pointer bg-[#ABABAD] text-xl font-semibold text-slate-800 hover:bg-[#ABABAD]/80">
          {workspaceLoading ? (
            <Loader className="animate-spin" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className="flex cursor-pointer flex-col items-start justify-start"
        >
          <div className="text-md font-semibold">{workspace?.name}</div>
          <span className="text-muted-foreground text-xs">
            Active workspace
          </span>
        </DropdownMenuItem>

        {filteredWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace._id}
            className="text-md cursor-pointer py-2 font-medium"
            onClick={() => router.push(`/workspace/${workspace._id}`)}
          >
            <div className="flex items-center gap-x-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-[#ABABAD]/60 px-2">
                {workspace.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                {workspace.name}
                <span className="text-muted-foreground text-xs">Workspace</span>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          onClick={() => setOpen(true)}
          className="py- flex cursor-pointer px-1"
        >
          <div className="bg-muted-foreground/10 flex items-center justify-center rounded-md p-2">
            <Plus className="size-5" />
          </div>
          <span className="text-md font-medium">Add Workspace</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
