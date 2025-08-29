import React from "react";
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
import { useForm } from "react-hook-form";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();

  const handleProviderSignIn = (value: "github" | "google") => {
    signIn(value);
  };
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sign up to continue</CardTitle>
        <CardDescription className="font-medium">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 space-y-4">
        <form className="space-y-2.5">
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
          <Input
            {...form.register("confirmPassword", {
              required: true,
            })}
            placeholder="Confirm Password"
            type="password"
          />
          <Button className="mt-2 w-full" size="lg">
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
          Already have an account?
          <span
            onClick={() => {
              setState("signIn");
            }}
            className="cursor-pointer text-sky-600 hover:underline"
          >
            {" "}
            Sign in{" "}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
