import PropertyListingCard from "@/app/components/shared/cards/listing.preview";
import OrderCard from "@/app/components/shared/cards/order";
import { KoulenFont } from "@/app/fonts/playfair";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getPropertyByID } from "@/server/db/property";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function PropertyViewPage({ params }: Props) {
  const property = await getPropertyByID(params.id);
  if (!property) return notFound();
  console.log(property);
  return (
    <main className="relative mt-[5dvh]">
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        className="absolute inset-0 z-0 flex w-screen items-center justify-center lg:px-4"
      >
        <OrderCard property={property} />
      </div>
    </main>
  );
}
