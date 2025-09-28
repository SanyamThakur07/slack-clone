import { useCurrentMember } from "@/features/members/api/useCurrentMember";
import { useGetWorkspace } from "@/features/workspaces/api/useGetWorkspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import {
  AlertTriangle,
  HashIcon,
  Loader,
  MessageSquareText,
  SendHorizonal,
} from "lucide-react";
import React from "react";
import WorkspaceHeader from "./workspace-header";
import SidebarItem from "./sidebar-item";
import { useGetChannels } from "@/features/channels/api/useGetChannels";
import WorkspaceSection from "./workspace-section";

const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  const { data: member, isLoading: memberLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const { data: channels, isLoading: channelsLoading } = useGetChannels({
    workspaceId,
  });

  if (memberLoading || workspaceLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Loader className="size-5 animate-spin text-white" />
      </div>
    );
  }

  if (!member || !workspace) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-y-2">
        <AlertTriangle className="size-5 text-white" />
        <p className="text-sm text-white">Workspace not found</p>
      </div>
    );
  }

  return (
    <div>
      <WorkspaceHeader
        workspace={workspace}
        isAdmin={member.role === "admin"}
      />

      <div className="mt-6 flex flex-col gap-1 px-3">
        <SidebarItem
          label="Threads"
          id="threads"
          icon={MessageSquareText}
          disabled
        />
        <SidebarItem
          label="Drafts & Sent"
          id="drafts"
          icon={SendHorizonal}
          disabled
        />
      </div>
      <WorkspaceSection label="Channnels" hint="New Channel" onNew={() => {}}>
        {channels?.map((item) => (
          <SidebarItem
            key={item._id}
            label={item.name}
            id={item._id}
            icon={HashIcon}
          />
        ))}
      </WorkspaceSection>
    </div>
  );
};

export default WorkspaceSidebar;
