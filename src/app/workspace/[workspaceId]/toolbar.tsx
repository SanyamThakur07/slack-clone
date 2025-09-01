import { Button } from "@/components/ui/button";
import { Info, Search } from "lucide-react";
import React from "react";

const Toolbar = () => {
  return (
    <nav className="flex h-10 items-center justify-between bg-[#481349] px-4 pb-0.5">
      <div className="flex-1" />
      <div className="max-[642px] min-w-[280px] shrink grow-[2]">
        <Button className="bg-accent/25 hover:bg-accent/25 flex h-7 w-full items-center justify-start p-1">
          <Search className="mr-2" />
          Search workspace
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <Button variant={"transparent"}>
          <Info />
        </Button>
      </div>
    </nav>
  );
};

export default Toolbar;
