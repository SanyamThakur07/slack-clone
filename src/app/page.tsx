"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/auth");
  };

  return (
    <div className="flex flex-col items-center justify-center font-bold">
      Welcome to Slack
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
