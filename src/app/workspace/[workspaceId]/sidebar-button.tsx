import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SidebarButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const SidebarButton = ({ icon: Icon, label, isActive }: SidebarButtonProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center space-y-0.5">
      <Button variant={"transparent"} className="size-10 cursor-pointer">
        <Icon className="size-6" />
      </Button>
      <span className="text-xs text-white">{label}</span>
    </div>
  );
};

export default SidebarButton;
