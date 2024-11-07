"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export default function GetNotifiedBanner() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setError(null);

    // Implement email submission logic here (API call, etc.)
  };

  return (
    <Card className="mx-auto w-full p-3 text-center">
      <CardHeader>
        <CardTitle>Get Notified When We Launch! 🚀</CardTitle>
        <p className="text-sm text-gray-500">
          Sign up to receive an email when we go live.
        </p>
      </CardHeader>
      <CardContent className="mt-4 space-y-4">
        <Button onClick={handleSubmit} className="" disabled={isSubmitted}>
          {isSubmitted ? "Subscribed!" : "Notify Me"}
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-2">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        {isSubmitted && !error && (
          <Alert variant="success" className="mt-2">
            <AlertTitle>Thank you! You’ll hear from us soon.</AlertTitle>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
