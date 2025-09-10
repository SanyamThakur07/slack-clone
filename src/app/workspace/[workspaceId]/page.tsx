"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import React from "react";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();

  return <div>hello</div>;
};

export default WorkspaceIdPage;
