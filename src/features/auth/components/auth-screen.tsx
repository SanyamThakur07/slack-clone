"use client";

import React, { useState } from "react";
import { SignInFlow } from "../type";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="flex h-screen items-center justify-center bg-[#5C3B5B]">
      <div className="w-md">
        {state == "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
