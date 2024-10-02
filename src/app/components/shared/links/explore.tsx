import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExploreLink() {
  return (
    <Link
      href="/explore"
      className="flex w-full items-center justify-center gap-4 border border-black p-4 transition duration-300 hover:bg-black hover:text-white"
    >
      Explore
      <ArrowRight />
    </Link>
  );
}
