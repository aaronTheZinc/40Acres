import { useServerAuthSession } from "@/server/auth/index";
import { redirect } from "next/navigation";
import {
  KoulenFont,
  NotoSansFont,
  OswaldFont,
  PlayfairFont,
} from "../fonts/playfair";
import { Banknote, Clock10Icon, PlusIcon, WalletIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ExploreLink from "../components/shared/links/explore";
import PropertiesSearchView from "../components/views/listings/explore";
import Link from "next/link";
import { SearchBar } from "../components/shared/search/searchbar";
import NotifyMeBanner from "@/components/shared/banner/notify-me";
import Image from "next/image";
import TransactionHistoryLog from "../components/logs/transaction-logs";

export default async function Dashboard() {
  const session = await useServerAuthSession();
  const user = session?.user;
  if (!user) return redirect("/auth/login");

  return (
    <main className="mt-[10dvh]">
      <div className="max-w-screen-2xl lg:mx-0">
        <div className="flex justify-center"></div>
        {/* <div className="flex w-full items-center gap-5 border-b-2 border-black p-5 text-left">
          <Image width={65} height={65} alt="app-logo" src="/logo.png" />
          <label className={`font-sans text-3xl text-black lg:text-6xl`}>
            <span className={`font-sans ${KoulenFont.variable} font-light`}>
              Welcome
            </span>
          </label>

        </div> */}
        <div className="p-5">
          <NotifyMeBanner />
        </div>
        <div></div>

        <div className="mx-2 gap-2 rounded-xl border border-dotted border-black lg:flex lg:p-4">
          <div className="w-1/5 rounded-xl border border-dotted border-black"></div>
          <div className="mx-3 mt-3 rounded-xl border border-dotted border-black p-4 shadow-xl lg:mt-0 lg:w-2/5">
            <div className="mt-8 text-center">
              <label className={`${KoulenFont.variable} font-sans text-6xl`}>
                $0
              </label>
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
          </div>
          <div className="relative mx-3 mt-3 h-96 rounded-xl border border-dotted border-black bg-[#f2f2f2] p-4 shadow-xl lg:mt-0 lg:h-auto lg:w-2/5">
            <div className="p-3">
              <label className={`${KoulenFont.variable} font-sans text-6xl`}>
                Connect Bank Account
              </label>
            </div>

            <div className="bottom-[20%] left-10 right-10 p-2 lg:absolute">
              <button className="flex h-16 w-full items-center justify-center gap-4 rounded-full bg-black p-4 text-white">
                Connect Now <WalletIcon size={35} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 max-w-screen-2xl px-2">
        <TransactionHistoryLog />
      </div>
    </main>
  );
}
