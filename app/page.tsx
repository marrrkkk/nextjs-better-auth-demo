import { auth } from "@/lib/auth" // Adjust import path based on your better-auth setup
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import UserProfileCard from "@/components/user-profile-card"

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-background p-4">
      <UserProfileCard
        user={{
          name: session.user.name || "User",
          email: session.user.email || "user@example.com",
        }}
      />
    </main>
  )
}
