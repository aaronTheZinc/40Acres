import Link from "next/link";
import { TrendTag } from "../../shared/tags";
import { PinIcon } from "lucide-react";

export const PropertyRecomendation = () => {
  return (
    <div className="flex text-white">
      <div className="flex h-[60px] w-[350px] items-center justify-evenly gap-2 border border-black bg-black p-4">
        <div>
          <img
            className="h-[40px] w-[40px] rounded-full border object-fill"
            alt="property-img"
            src={
              "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
        </div>
        <label className="text-sm">
          <span className="">JMK</span> |{" "}
          <span className="font-mono text-red-500">$175.00 p/s</span>
        </label>
        <div className="flex gap-3">
          <Link className="rounded-xlp-1" href="/">
            <PinIcon fill="white" />
          </Link>
          <div className="h-[30px] w-[30px]">
            <TrendTag trend="up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PropertyRecomendationView() {
  return (
    <div className="flex gap-4">
      {new Array(5).fill(null).map((item, idx) => (
        <PropertyRecomendation key={idx} />
      ))}
    </div>
  );
}
