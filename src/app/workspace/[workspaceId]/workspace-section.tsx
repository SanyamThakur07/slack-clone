import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useToggle } from "react-use";

interface WorkspaceSectionProps {
  children: React.ReactNode;
  label: string;
  hint: string;
  onNew: () => void;
}

const WorkspaceSection = ({
  children,
  label,
  hint,
  onNew,
}: WorkspaceSectionProps) => {
  const [on, toggle] = useToggle(true);

  return (
    <div className="mt-2 flex flex-col px-3">
      <div className="flex items-center px-1">
        <Button
          variant={"transparent"}
          className="size-7 p-0.5"
          onClick={toggle}
        >
          <FaCaretDown
            className={cn("size-4 transition-transform", !on && "-rotate-90")}
          />
        </Button>
        <Button
          variant={"transparent"}
          className="flex items-center justify-start overflow-hidden p-1.5"
          size="sm"
        >
          <span>{label}</span>
        </Button>
        <div className="ml-auto">
          {onNew && (
            <Hint label={hint} side="top" align="center">
              <Button
                variant={"transparent"}
                className="size-7 p-0.5"
                onClick={onNew}
              >
                <PlusIcon className="size-4" />
              </Button>
            </Hint>
          )}
        </div>
      </div>
      {on && children}
    </div>
  );
};

export default WorkspaceSection;
