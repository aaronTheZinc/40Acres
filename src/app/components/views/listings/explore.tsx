import { KoulenFont } from "@/app/fonts/playfair";
import PropertyListingView from ".";
import { SearchBar } from "../../shared/search/searchbar";

interface PropertiesSearchViewProps {
  header?: string;
}

export default function PropertiesSearchView({
  header,
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
            <>
              <label
                className={`lg w-min p-2 font-sans ${KoulenFont.variable} text-5xl lg:text-6xl`}
              >
                Explore
              </label>
              <label
                className={`lg w-minp-2 font-sans ${KoulenFont.variable} text-5xl lg:text-6xl`}
              >
                Properties
              </label>
            </>
          )}
        </section>
        <div className="mt-8">
          <SearchBar />
        </div>
      </div>

      <div className="overflow-y-scroll">
        <PropertyListingView />
      </div>
    </main>
  );
}
