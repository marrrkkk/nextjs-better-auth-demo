"use client";

import React from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";

export default function SignInSocial({
  provider,
  children,
}: {
  provider:
    | "github"
    | "apple"
    | "discord"
    | "facebook"
    | "google"
    | "microsoft"
    | "spotify"
    | "twitch"
    | "twitter"
    | "dropbox"
    | "linkedin"
    | "gitlab"
    | "tiktok"
    | "reddit"
    | "roblox"
    | "vk"
    | "kick";
  children: React.ReactNode;
}) {
  return (
    <Button
      onClick={async () => {
        await authClient.signIn.social({
          provider,
          callbackURL: "/",
        });
      }}
      type="button"
      variant={"outline"}
    >
      {children}
    </Button>
  );
}