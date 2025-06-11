"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "mark@gmail.com",
      password: "password"
    }
  })
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      name: "Mark",
      email: "mark@gmail.com",
      password: "password"
    }
  })
}

