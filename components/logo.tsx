import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export default function Logo() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/bottle.svg" alt="logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700 pb-1", roboto.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
}
