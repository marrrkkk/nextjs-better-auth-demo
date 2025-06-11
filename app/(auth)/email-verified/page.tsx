import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailVerifiedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Email Verified</CardTitle>
          <CardDescription className="text-base">
            Your email address has been successfully verified. You can now sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Button asChild className="w-full">
            <Link href="/login">Continue to Login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
