import { User, Mail } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import SignoutButton from "@/components/signout-button"

interface UserProfileCardProps {
  user: {
    name: string
    email: string
  }
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center pb-4">
        <Avatar className="w-16 h-16 mx-auto mb-4">
          <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <User className="w-4 h-4 text-muted-foreground" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground">Username</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.email}</p>
              <p className="text-xs text-muted-foreground">Email</p>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <SignoutButton />
        </div>
      </CardContent>
    </Card>
  )
}
