"use client";

import { usePriceFormatter } from "@/app/hooks/price";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useMemo, useState } from "react";

interface WidthdrawCardProps {
  maxAmount?: number;
}

export default function WidthdrawCard({
  maxAmount = 2000,
}: WidthdrawCardProps) {
  const [widthDrawAmount, setWithdrawAmount] = useState<number>(0);
  const displayAmount = usePriceFormatter(widthDrawAmount);
  const maxWithdrawDisplayAmount = usePriceFormatter(maxAmount);

  const handleAmountChange = (amount: number[]) =>
    setWithdrawAmount(amount[0]!);

  return (
    <Card className="h-auto w-full p-6">
      <CardHeader>
        <CardTitle>Withdraw Funds</CardTitle>
        <p className="">*Max Amout {maxWithdrawDisplayAmount}</p>
      </CardHeader>
      <CardContent className="relative h-full w-full">
        <div className="text-center text-black">
          <label className="text-3xl font-extrabold">{displayAmount}</label>
        </div>
        <div className="p-8">
          <Slider onValueChange={handleAmountChange} max={maxAmount} />
        </div>

        <button className="mt-18 w-full bg-black p-3 text-white">
          Widthdraw
        </button>
      </CardContent>
    </Card>
  );
}
