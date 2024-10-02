"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useCreatePropertyForm } from "@/app/hooks/requests/properties";

export default function CreatePropertyView() {
  const { loading, setValue, values, submit } = useCreatePropertyForm();

  return (
    <div className="flex min-h-screen items-center justify-center p-2">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Property
          </CardTitle>
          <CardDescription>
            Enter the details of the new property
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, State"
                className="border-gray-300"
                onChange={(e) => setValue("address", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipcode">Zipcode</Label>
              <Input
                id="zipcode"
                type="number"
                placeholder="12345"
                className="border-gray-300"
                onChange={(e) => setValue("zipcode", parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxShareCount">Max Share Count</Label>
              <Input
                id="maxShareCount"
                type="number"
                placeholder="100"
                className="border-gray-300"
                onChange={(e) =>
                  setValue("maxShareCount", parseInt(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shareCount">Share Price</Label>
              <Input
                id="shareCount"
                type="number"
                placeholder="0"
                className="border-gray-300"
                onChange={(e) =>
                  setValue("sharePrice", parseFloat(e.target.value))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL (Optional)</Label>
              <Input
                id="thumbnail"
                placeholder="https://example.com/image.jpg"
                className="border-gray-300"
                onChange={(e) => setValue("thumbnail", e.target.value)}
              />
              <p className="text-sm text-gray-500">
                Enter a valid URL for the property thumbnail image
              </p>
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Create Property
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
