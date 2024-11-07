import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PriceTag, PropertyTypeTag } from "../tags";
import { Progress } from "@/components/ui/progress";
import { Property } from "@prisma/client";
import Link from "next/link";

interface Props {
  property: Property;
}

export default function PropertyListingCard({ property }: Props) {
  return (
    <Card className="w-full hover:grow">
      <CardHeader className="p-1">
        <PropertyTypeTag type="townhouse" />
      </CardHeader>
      <CardContent className="relative w-full p-2">
        <div className="w-full">
          <section>
            <img
              className="h-[10rem] w-full object-fill lg:h-[10rem]"
              alt="property-img"
              src={
                property?.thumbnail ??
                "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            />
          </section>
          <div>
            <section className="font-bold">
              <label className="text-lg">12345 Sesame ST</label>
            </section>
            <section className="flex items-center gap-3">
              <p className="text-slate-500">Detroit MI</p>
              <PriceTag price={250} />
            </section>
            <section className="p-2 text-center">
              <Progress className="mt-2 text-green-300" value={33} />
              <text className="text-center text-sm">23/900 Shares</text>
            </section>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-1 pt-4">
        <Link
          href={`/property/${property?.id}`}
          className="w-full gap-2 rounded-md bg-black p-1 text-center text-white"
        >
          Invest
        </Link>
        {/* <button className="w-full rounded-md border p-1">Inquire</button> */}
      </CardFooter>
    </Card>
  );
}
