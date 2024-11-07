import { InterFont } from "@/app/fonts/playfair";
import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";

export const PriceTag: FC<{ price: number }> = ({ price }) => (
  <div className="flex gap-2 rounded-md bg-black p-1 text-white">
    <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
    <text>{`$${price.toFixed(2).toString()}`}</text>
  </div>
);

export type PropertyTagType = "townhouse" | "apartment" | "house";

export const TrendTag: FC<{ trend: "up" | "down" }> = ({ trend }) => (
  <div className="flex items-center justify-center rounded-lg bg-green-300 p-1">
    {trend === "up" ? <TrendingUp /> : <TrendingDown />}
  </div>
);

const PropertyTagUI: Record<PropertyTagType, { color: string; label: string }> =
  {
    townhouse: {
      color: "#D1D2F9",
      label: "Townhouse",
    },
    apartment: {
      color: "",
      label: "Apartment",
    },
    house: {
      color: "",
      label: "Home",
    },
  };

export const PropertyTypeTag: FC<{ type: PropertyTagType }> = ({ type }) => {
  const ui = PropertyTagUI[type];
  return (
    <div
      className="flex items-center justify-between gap-2 rounded-md p-2"
      style={{ backgroundColor: ui.color }}
    >
      <label
        className={`rounded bg-black p-2 font-sans font-bold text-white ${InterFont.variable}`}
      >
        {ui.label}
      </label>
      <TrendTag trend="up" />
    </div>
  );
};
