import { ArrowRight } from "lucide-react";
import PropertyListingCard from "../../shared/cards/listing.preview";
import Link from "next/link";
import ExploreLink from "../../shared/links/explore";

export function PropertyListingDemoView() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-10">
        <PropertyListingCard />
        <div className="hidden md:block">
          <PropertyListingCard />
        </div>
      </div>
      <div className="p-2">
        <ExploreLink />
      </div>
    </div>
  );
}
