import Image from "next/image";
import Link from "next/link";
import { KoulenFont } from "./fonts/playfair";
import PropertyListingView from "./components/views/listings";
import WidthdrawCard from "./components/shared/cards/withdraw";
import { PropertyListingDemoView } from "./components/views/listings/demo";

export default function HomePage() {
  return (
    <main className="mt-[2dvh] bg-gradient-to-b lg:mt-[5dvh]">
      {/* Section ONE */}
      <div className="p-2 lg:flex">
        <div className="containerjustify-center gap-12 px-4 py-16 lg:w-1/2">
          <label
            className={`font-sans text-5xl lg:text-7xl ${KoulenFont.variable}`}
          >
            Peer to Peer Investment Marketplace
          </label>
          <section>
            <p className="py-4 lg:max-w-[500px]">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a
            </p>
          </section>
          <div className="mt-4">
            <Link
              href="/auth/register"
              className="w-[500px] rounded bg-black p-4 text-white"
            >
              {" "}
              Register
            </Link>
            <Link
              href="/auth/login"
              className="ml-5 w-[10rem] rounded border border-black p-4"
            >
              {" "}
              Login
            </Link>
          </div>
          <div className="mt-10">
            <PropertyListingDemoView />
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center lg:w-1/2">
          <section className="mt-10 flex justify-center">
            <img
              src="/graphics/home-graphic.png"
              alt="home-grahic"
              className="max-h-[50dvh] w-[80%] rounded bg-white p-2 px-10"
            />
          </section>
          <div className="flex flex-col justify-center px-4 py-4 text-center lg:px-24">
            <label className={`font-sans text-4xl ${KoulenFont.variable}`}>
              Passive Income
            </label>
            <p className="">
              Receive weekly income from rental properties, hassle-free. No
              management worries, just returns
            </p>
          </div>
          <div className="w-full lg:px-10">
            <WidthdrawCard />
          </div>
        </div>
      </div>
      {/* Section TWO */}
      {/* <div className="flex h-[100dvh] w-screen">
        <div className="lg:w-1/2">Hello</div>
        <div className="p-4 lg:w-1/2">
          <div className="pt-10">
            <label
              className={`bg-black p-4 font-sans text-5xl leading-loose text-white ${KoulenFont.variable}`}
            >
              Social Collaboration & Community Visualization
            </label>
          </div>
          <div className="h-full">
            <p className="rounded p-6 text-xl">
              Harness Collective Investment to Strengthen Communities Connecting
              with like-minded investors allows you to pool resources and align
              financial goals for maximum impact. By targeting specific real
              estate opportunities, investors can drive revitalization in
              underdeveloped or emerging areas, bringing new businesses,
              housing, and infrastructure to communities that need it. This
              collective approach not only amplifies individual financial gains
              but also fosters economic growth, creating jobs and boosting local
              economies. As investors work together, they help build thriving,
              resilient neighborhoods where both residents and businesses can
              flourish.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
