import React, { useState } from "react";
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
import { TriangleAlert } from "lucide-react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [error, setError] = useState("");
  const { signIn } = useAuthActions();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handlePasswordSignUp = form.handleSubmit(
    async ({ name, email, password, confirmPassword }) => {
      setError(""); // Clear any previous errors

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      try {
        await signIn("password", {
          name,
          email,
          password,
          flow: "signUp",
        });
      } catch (error) {
        console.error("Sign up error:", error);
        setError("Password need to have atleast 8 letters. Please try again.");
      }
    },
  );

  const handleProviderSignUp = (value: "github" | "google") => {
    signIn(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sign up to continue</CardTitle>
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
        <form onSubmit={handlePasswordSignUp} className="space-y-2.5">
          <Input
            {...form.register("name", {
              required: true,
            })}
            placeholder="Full Name"
          />
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
          <Button type="submit" className="mt-2 w-full" size="lg">
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col space-y-2.5">
          <Button
            onClick={() => {
              handleProviderSignUp("google");
            }}
            variant={"outline"}
          >
            <FcGoogle className="size-5" />
            Continue with Google
          </Button>
          <Button
            onClick={() => {
              handleProviderSignUp("github");
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
