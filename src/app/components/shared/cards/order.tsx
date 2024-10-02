"use client";

import { KoulenFont } from "@/app/fonts/playfair";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Property } from "@prisma/client";
import { useState } from "react";
import ShareOrderView from "../../modals/order";
import { useSocket } from "@/app/hooks/socket";

interface OrderCardProps {
  property: Property;
}

export default function OrderCard({ property }: OrderCardProps) {
  const [open, setOpen] = useState<boolean>(false);
  useSocket();
  return (
    <Card>
      <CardContent className="p-4">
        <img src={property.thumbnail ?? ""} className="h-[20rem]" />
        <div className="p-4">
          <label className={`font-sans text-3xl ${KoulenFont.variable}`}>
            {property.address}
          </label>
          <section>
            <p>Detroit, MI</p>
          </section>
        </div>
        <div className="px-16">
          <Progress value={20} max={100} />
        </div>
      </CardContent>
      <CardFooter>
        <button
          onClick={() => setOpen(true)}
          className="w-full rounded-xl bg-black p-3 text-white"
        >
          Purchase
        </button>
      </CardFooter>
      <ShareOrderView property={property} open={open} setOpen={setOpen} />
    </Card>
  );
}
