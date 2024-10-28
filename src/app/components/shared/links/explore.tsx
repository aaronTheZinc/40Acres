import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExploreLink() {
  return (
    <Link
      href="/explore"
      className="flex w-full items-center justify-center gap-4 border border-black bg-black p-4 text-white transition duration-300 hover:bg-black hover:text-white"
    >
      Explore
      <ArrowRight />
    </Link>
  );
}
