import { useServerAuthSession } from "@/server/auth/index";
import { redirect } from "next/navigation";
import { KoulenFont } from "../fonts/playfair";
import { Banknote, PlusIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ExploreLink from "../components/shared/links/explore";
import PropertiesSearchView from "../components/views/listings/explore";
import Link from "next/link";

export default async function Dashboard() {
  const session = await useServerAuthSession();
  const user = session?.user;
  if (!user) return redirect("/auth/login");

  console.log("session -> ", user);
  return (
    <main className="mt-[10dvh]">
      <div className="p-4">
        <label
          className={`font-sans text-5xl text-black ${KoulenFont.variable}`}
        >{`Welcome`}</label>
        <p className="text-2xl font-light">
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div className="p-4">
        <Card className="bg-black text-white">
          <CardContent>
            <div className="mt-8 text-center">
              <label className={`${KoulenFont.variable} font-sans text-4xl`}>
                $15,342.12
              </label>
              <section>
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
          </CardContent>
        </Card>
      </div>
      <div className="p-6">
        <ExploreLink />
      </div>
      <div>
        <PropertiesSearchView header="My Properties" />
      </div>
    </main>
  );
}
