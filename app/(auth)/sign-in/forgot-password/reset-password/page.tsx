"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("Invalid or missing token.");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    const { error } = await authClient.resetPassword({
      token,
      newPassword: password,
    });

    if (error) {
      setMessage("Failed to reset password.");
    } else {
      setMessage("Password reset! You can now sign in.");
      setTimeout(() => router.push("/sign-in"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-bold">Reset Password</h1>
      {message && <p>{message}</p>}
      <Input
        type="password"
        placeholder="New password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2"
      />
      <Button type="submit">Reset Password</Button>
    </form>
  );
}