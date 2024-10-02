import { usePriceFormatter } from "@/app/hooks/price";
import { Slider } from "@/components/ui/slider";
import { Property } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Sheet } from "react-modal-sheet";

interface ShareOrderProps {
  open: boolean;
  setOpen(b: boolean): void;
  property: Property;
}
export default function ShareOrderView({
  open,
  setOpen,
  property,
}: ShareOrderProps) {
  // const shareAPI = useMutation()
  const [orderSize, setOrderSize] = useState<number>(0);
  const price = useMemo(() => {
    const sharePrice = property.sharePrice;
    let size = orderSize;
    if (property.maxShareCount < size) {
      size = property.maxShareCount;
    }
    return size * sharePrice;
  }, [orderSize, property]);
  const displayPrice = usePriceFormatter(price);
  const perShareDisplayPrice = usePriceFormatter(property.sharePrice);

  const handleCreateShareOrder = () => {};
  return (
    <>
      <Sheet isOpen={open} onClose={() => setOpen(false)}>
        <Sheet.Container className="relative">
          <Sheet.Header className="p-4 text-center">
            <label className="text-5xl font-extrabold">Invest </label>
          </Sheet.Header>
          <Sheet.Content className="flex justify-center">
            <div className="flex justify-center p-5">
              <div className="text-center">
                <label className="text-5xl">{displayPrice}</label>
                <section>
                  <p>
                    {perShareDisplayPrice} per share | {orderSize}{" "}
                    <span className="font-bold">Shares Selected</span>
                  </p>
                </section>
              </div>
              <div className="mt-8"></div>
            </div>
            <div className="p-10">
              <Slider onValueChange={(nums) => setOrderSize(nums[0]!)} />
            </div>
            <div className="mt-24 p-4">
              <button
                className="w-full rounded-lg bg-black p-4 text-white"
                onClick={handleCreateShareOrder}
              >
                Invest ⚡
              </button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
