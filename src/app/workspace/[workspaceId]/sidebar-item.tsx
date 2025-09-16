import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  label: string;
  id: string;
  icon: LucideIcon;
  disabled?: boolean;
  variant?: VariantProps<typeof sidebarVariant>["variant"];
}

export const sidebarVariant = cva("flex items-center justify-start gap-1.5", {
  variants: {
    variant: {
      default: "text-[#F9EDFFCC]",
      active: "text-[#481349] bg-white/90 hover:bg-white/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const SidebarItem = ({
  label,
  id,
  icon: Icon,
  variant,
  disabled,
}: SidebarItemProps) => {
  const workspaceId = useWorkspaceId();
  return (
    <Button
      variant={"transparent"}
      asChild
      className={cn(sidebarVariant({ variant }))}
    >
      <Link href={`/workspace/${workspaceId}/channel/${id}`}>
        <Icon />
        <span>{label}</span>
      </Link>
    </Button>
  );
};

export default SidebarItem;
