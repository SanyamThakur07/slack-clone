import React from "react";
import { Doc } from "../../../../convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ListFilter, SquarePen } from "lucide-react";
import Hint from "@/components/hint";

interface WorkspaceHeaderProps {
  isAdmin: boolean;
  workspace: Doc<"workspaces">;
}

const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
  return (
    <div className="flex h-[50px] items-center justify-between px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"transparent"}
            className="cursor-pointer text-lg font-semibold"
          >
            {workspace.name}
            <ChevronDown className="ml-1 shrink-0 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="cursor-pointer">
            <div className="mr-2 flex size-9 items-center justify-center rounded-md bg-[#616061] text-lg font-semibold">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="font-bold">{workspace.name}</span>
              <p className="text-muted-foreground text-xs">Active workspace</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {}}
              >
                Invite people to {workspace.name}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {}}
              >
                Preferences
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center justify-center gap-0.5">
        <Hint label="Filter conversations" side="bottom">
          <Button variant={"transparent"}>
            <ListFilter className="size-4" />
          </Button>
        </Hint>
        <Hint label="New messages" side="bottom">
          <Button variant={"transparent"}>
            <SquarePen className="size-4" />
          </Button>
        </Hint>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
