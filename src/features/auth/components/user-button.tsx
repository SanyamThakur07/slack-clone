import React from "react";
import { useCurrentUser } from "../api/useCurrentUser";
import { Loader, LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthActions } from "@convex-dev/auth/react";

const UserButton = () => {
  const { data: user, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <Loader className="text-muted-foreground size-5 animate-spin" />;
  }
  if (!user) return null;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar className="size-8 cursor-pointer">
          <AvatarFallback className="font-bold">
            {user.name!.charAt(0).toUpperCase()}
          </AvatarFallback>
          <AvatarImage src={user.image} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right">
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
