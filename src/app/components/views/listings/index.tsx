"use client";
import { useMobile } from "@/app/hooks/layout/layout";
import PropertyListingCard from "../../shared/cards/listing.preview";
import { SearchBar } from "../../shared/search/searchbar";
import { Property } from "@prisma/client";

interface Props {
  properties: Array<Property>;
}

export default function PropertyListingView({ properties }: Props) {
  //   const mobile = useMobile();
  //   if (mobile) listings.length = 1;
  return (
    <div className="w-full">
      <div className="mt-10 grid w-full grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-10">
        {properties.map((property, idx) => (
          <div key={idx} className="w-full">
            <PropertyListingCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}
