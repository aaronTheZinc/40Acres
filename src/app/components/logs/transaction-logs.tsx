import { OswaldFont } from "@/app/fonts/playfair";
import { Clock10Icon } from "lucide-react";

export default function TransactionHistoryLog() {
  return (
    <div className="min-h-96 rounded-xl border border-dotted border-black p-6">
      <div>
        <label
          className={`flex items-center gap-3 font-sans text-5xl ${OswaldFont.variable}`}
        >
          Transaction History
          <Clock10Icon />
        </label>
      </div>
    </div>
  );
}
