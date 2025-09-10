import UserButton from "@/features/auth/components/user-button";
import React from "react";
import SidebarButton from "./sidebar-button";
import {
  BellIcon,
  HomeIcon,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import WorkspaceSwitcher from "./workspace-switcher";

const Sidebar = () => {
  return (
    <aside className="flex w-[90px] flex-col items-center gap-y-4 bg-[#481349] pt-5 pb-4">
      <WorkspaceSwitcher />
      <SidebarButton icon={HomeIcon} label="Home" />
      <SidebarButton icon={MessageSquare} label="DMs" />
      <SidebarButton icon={BellIcon} label="Notifications" />
      <SidebarButton icon={MoreHorizontal} label="More" />
      <div className="mt-auto flex flex-col items-center justify-center">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
