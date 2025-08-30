import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFlow } from "../type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}
const SignInCard = ({ setState }: SignInCardProps) => {
  const [error, setError] = useState("");
  const { signIn } = useAuthActions();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlePasswordSignIn = form.handleSubmit(
    async ({ email, password }) => {
      try {
        await signIn("password", { email, password, flow: "signIn" });
      } catch {
        setError("Invalid email or password");
      }
    },
  );

  const handleProviderSignIn = (value: "github" | "google") => {
    signIn(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Log in to continue</CardTitle>
        <CardDescription className="font-medium">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-0">
        {error && (
          <div className="bg-destructive/15 text-destructive flex w-full items-center gap-x-2 rounded-md p-3 text-sm">
            <TriangleAlert />
            <p>{error}</p>
          </div>
        )}
      </CardContent>
      <CardContent className="space-y-4">
        <form onSubmit={handlePasswordSignIn} className="space-y-2.5">
          <Input
            {...form.register("email", {
              required: true,
            })}
            placeholder="Email"
            type="email"
          />
          <Input
            {...form.register("password", {
              required: true,
            })}
            placeholder="Password"
            type="password"
          />
          <Button
            type="submit"
            className="mt-2 w-full cursor-pointer"
            size="lg"
          >
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col space-y-2.5">
          <Button
            onClick={() => {
              handleProviderSignIn("google");
            }}
            variant={"outline"}
          >
            <FcGoogle className="size-5" />
            Continue with Google
          </Button>
          <Button
            onClick={() => {
              handleProviderSignIn("github");
            }}
            variant={"outline"}
          >
            <FaGithub className="size-5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          Don't have an account?
          <span
            onClick={() => {
              setState("signUp");
            }}
            className="cursor-pointer text-sky-600 hover:underline"
          >
            {" "}
            Sign up{" "}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
