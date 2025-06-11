"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { FaGoogle, FaGithub } from "react-icons/fa"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SignInSocial from "@/components/signin-social"

export default function SignUpForm() {
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword"),
    }

    if (data.password !== data.confirmPassword) {
      toast("Error", { description: "Password do not match" })
      return
    }

    try {
      await authClient.signUp.email(
        {
          email: data.email,
          password: data.password,
          name: data.name,
        },
        {
          onRequest: () => setIsPending(true),
          onSuccess: () => {
            toast("Account Created",{
						description:
							"Your account has been created. Check your email for a verification link.",
					});
          e.currentTarget.reset()
          },
          onError: (ctx) => {
            toast("Error", { description: ctx.error.message })
          },
        }
      )
    } catch (error) {
      console.error(error)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" disabled={isPending} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="name@example.com" disabled={isPending} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Enter your password" disabled={isPending} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" disabled={isPending} required />
          </div>
          <Button disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

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
    </div>
  )
}
