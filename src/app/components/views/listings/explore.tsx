import { KoulenFont, OswaldFont } from "@/app/fonts/playfair";
import PropertyListingView from ".";
import { SearchBar } from "../../shared/search/searchbar";
import { Property } from "@prisma/client";

interface PropertiesSearchViewProps {
  header?: string;
  properties: Array<Property>;
}

export default function PropertiesSearchView({
  header,
  properties,
}: PropertiesSearchViewProps) {
  return (
    <main className="relative mt-[10dvh] lg:px-10">
      <div className="px-4">
        <section className="flex flex-col gap-1 lg:gap-2">
          {header ? (
            <label className={`font-sans ${KoulenFont.variable} text-5xl`}>
              {header}
            </label>
          ) : (
            <div
              className={`font-sans ${KoulenFont.variable} text-5xl lg:text-6xl`}
            >
              <label className={`lg w-min p-2`}>Explore</label>
              <label className={`lg w-minp-2`}>Properties</label>
            </div>
          )}
          <p className="opacity-50">
            Search Properties & Use Filters To Narrow Your Search
          </p>
        </section>
        <div className="mt-8">
          <SearchBar />
        </div>
      </div>

      <div className="overflow-y-scroll">
        <PropertyListingView properties={properties} />
      </div>
    </main>
  );
}
