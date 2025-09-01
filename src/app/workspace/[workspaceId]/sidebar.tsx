import UserButton from "@/features/auth/components/user-button";
import React from "react";
import WorkspaceSwitcher from "./workspace-switcher";
import SidebarButton from "./sidebar-button";
import {
  BellIcon,
  HomeIcon,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="flex w-[90px] flex-col items-center gap-y-4 bg-[#481349] pt-5 pb-4">
      <WorkspaceSwitcher />
      <SidebarButton icon={HomeIcon} label="Home" isActive />
      <SidebarButton icon={MessageSquare} label="DMs" isActive />
      <SidebarButton icon={BellIcon} label="Notifications" isActive />
      <SidebarButton icon={MoreHorizontal} label="More" isActive />

      <div className="mt-auto flex flex-col items-center justify-center">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
