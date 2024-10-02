"use client";
import { useLoginForm, useRegistrationForm } from "@/app/hooks/requests/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function LoginView() {
  const { values, setValue, submit, loading } = useLoginForm();
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-100 p-2">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      <Card className="relative z-10 w-full max-w-md shadow-xl">
        <CardHeader className="flex items-center justify-center space-y-1">
          <Image width={50} height={50} alt="logo" src="/logo.png" />
          <CardTitle className="text-center text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information to register
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4"></div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              required
              onChange={(e) => setValue("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Email</Label>
            <Input
              id="password"
              type="password"
              placeholder="*****"
              required
              onChange={(e) => setValue("password", e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={submit}
            disabled={loading}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
