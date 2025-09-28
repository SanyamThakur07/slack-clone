import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import Link from "next/link";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserItemProps {
  id: Id<"members">;
  label: string;
  image?: string;
  variant?: string;
}

const UserItem = ({ id, label, image, variant }: UserItemProps) => {
  const workspaceId = useWorkspaceId();

  return (
    <div>
      <Button variant={"transparent"} asChild>
        <Link href={`/workspace/${workspaceId}/member/${id}`}>
          <Avatar className="flex items-center justify-center">
            <AvatarImage className="size-6 rounded-lg" src={image} />
            <AvatarFallback>{label.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{label}</span>
        </Link>
      </Button>
    </div>
  );
};

export default UserItem;
