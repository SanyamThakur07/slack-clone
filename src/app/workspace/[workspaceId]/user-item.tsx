import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import Link from "next/link";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const userItemVariants = cva("flex items-center justify-start gap-1.5", {
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
interface UserItemProps {
  id: Id<"members">;
  label?: string;
  image?: string;
  variant?: VariantProps<typeof userItemVariants>["variant"];
}

const UserItem = ({ id, label, image, variant }: UserItemProps) => {
  const workspaceId = useWorkspaceId();

  return (
    <div>
      <Button
        variant={"transparent"}
        className={cn(userItemVariants({ variant }))}
        asChild
      >
        <Link href={`/workspace/${workspaceId}/member/${id}`}>
          <Avatar className="flex items-center">
            <AvatarImage className="size-6 rounded-lg" src={image} />
            <AvatarFallback>{label?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{label}</span>
        </Link>
      </Button>
    </div>
  );
};

export default UserItem;
