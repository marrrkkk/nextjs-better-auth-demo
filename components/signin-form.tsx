"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaGoogle, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { authClient } from "@/lib/auth-client"
import SignInSocial from "@/components/signin-social"

export default function SignInForm() {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    try {
      await authClient.signIn.email(
        { email: data.email, password: data.password },
        {
          onRequest: () => setIsPending(true),
          onSuccess: () => {
            router.push("/")
            router.refresh()
          },
          onError: (ctx) => {
            toast("Error", { description: ctx.error.message })
          },
        }
      )
    } catch (error) {
      console.error(error)
    }

    setIsPending(false)
  }

  return (
    <div className="grid gap-6">
      {/* Social Logins */}
      <div className="grid grid-cols-2 gap-4">
        <SignInSocial provider="github">
          <FaGithub className="mr-2 h-4 w-4" />
          GitHub
        </SignInSocial>
        <SignInSocial provider="google">
          <FaGoogle className="mr-2 h-4 w-4" />
          Google
        </SignInSocial>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      {/* Email/Password Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/sign-in/forgot-password"
                className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              disabled={isPending}
              required
            />
          </div>
          <Button disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
