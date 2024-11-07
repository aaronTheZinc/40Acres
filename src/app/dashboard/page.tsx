import { useServerAuthSession } from "@/server/auth/index";
import { redirect } from "next/navigation";
import { KoulenFont, OswaldFont } from "../fonts/playfair";
import {
  Banknote,
  BellIcon,
  Clock10Icon,
  PlusIcon,
  WalletIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ExploreLink from "../components/shared/links/explore";
import PropertiesSearchView from "../components/views/listings/explore";
import Link from "next/link";
import { SearchBar } from "../components/shared/search/searchbar";
import NotifyMeBanner from "@/components/shared/banner/notify-me";
import Image from "next/image";
import TransactionHistoryLog from "../components/logs/transaction-logs";
import PropertyRecomendationView from "../components/views/listings/recomendation";
import HorizontalAutoScroll from "../components/shared/scroll/horizontal-scroll";
import { AssetsChart } from "../components/charts/assets";

export default async function Dashboard() {
  const session = await useServerAuthSession();
  const user = session?.user;
  if (!user) return redirect("/auth/login");

  return (
    <main className="pt-6">
      <div className="max-w-screen-2xl lg:mx-0">
        <div className="flex justify-center"></div>

        <div className="mt-10 flex w-full items-center justify-evenly gap-10 border-b p-4">
          <section className="lg:max-[15%]">
            <label
              className={`font-sans text-3xl ${OswaldFont.variable}`}
            >{`Hi, ${user.firstName}`}</label>
            <p className="text-zinc-500">Welcome Back!</p>
          </section>
          <section className="hidden w-[80%] overflow-x-scroll md:block">
            <HorizontalAutoScroll>
              <PropertyRecomendationView />
            </HorizontalAutoScroll>
          </section>
          <section className="w-[5%]">
            <BellIcon />
          </section>
        </div>

        <div className="mx-2 gap-2 rounded-xl lg:flex lg:p-4">
          <div className="mx-3 mt-3 rounded-xl border border-dotted border-black p-2 shadow-xl lg:mt-0 lg:w-1/2">
            <div className="text-center">
              <section className="mt-4">
                <label
                  className={`${KoulenFont.variable} mt-8 font-sans text-4xl lg:text-6xl`}
                >
                  $4,502.29
                </label>
              </section>
              <section className="mt-3">
                <text>34 Shares Owned</text>
              </section>
            </div>
            <div className="p-6">
              <Link
                href="/property/create"
                className="flex w-full justify-center gap-4 rounded bg-white p-3 text-black"
              >
                Create Property
                <PlusIcon />
              </Link>
              <button className="mt-2 flex w-full justify-center gap-4 rounded border p-3">
                Withdraw Funds
                <Banknote />
              </button>
            </div>
            <div className="p-6">
              <ExploreLink />
            </div>
            <NotifyMeBanner />
          </div>
          <div className="relative mx-3 mt-3 h-96 rounded-xl border border-dotted border-black bg-[#f2f2f2] p-1 shadow-xl lg:mt-0 lg:h-auto lg:w-1/2">
            <AssetsChart />
            {/* <div className="p-3">
              <label className={`${KoulenFont.variable} font-sans text-6xl`}>
                Connect Bank Account
              </label>
            </div>

            <div className="bottom-[20%] left-10 right-10 p-2 lg:absolute">
              <button className="flex h-16 w-full items-center justify-center gap-4 rounded-full bg-black p-4 text-white">
                Connect Now <WalletIcon size={35} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-screen-2xl px-2">
        <TransactionHistoryLog />
      </div>
    </main>
  );
}
