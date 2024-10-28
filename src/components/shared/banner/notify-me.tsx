import { BellIcon } from "lucide-react";

export default function NotifyMeBanner() {
  return (
    <div className="rounded border border-black bg-black p-5 shadow-xl">
      <div className="flex items-center justify-between gap-6 text-center">
        <label className="font-mono text-sm text-white md:text-2xl">
          🚀 Get Notified When We Launch
        </label>
        <button className="flex gap-2 rounded bg-white p-2 text-black">
          <BellIcon />
        </button>
      </div>
    </div>
  );
}
