"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div className="flex flex-col items-center justify-center font-bold">
      Welcome to Slack
      <Button onClick={() => void signOut()}>Sign Out</Button>
    </div>
  );
}
