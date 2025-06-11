import Link from "next/link"
import SignInForm from "@/components/signin-form"
import Logo from "@/components/logo"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account</p>
        </div>
        <SignInForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/sign-up" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
