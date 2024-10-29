import Link from "next/link";
import { INSTAGRAM_URL } from "@/constants";
import InstagramIcon from "./icons/instagram";

// FIXME: Maybe remove this component?
export function Footer() {
  return (
    <footer className="flex w-full pt-5 pb-6 px-4 md:px-6 lg:px-8 xl:px-12 justify-between">
      <Link
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-stone-600 hover:text-stone-900 transition-colors w-fit"
      >
        <span className="text-xl font-extralight">
          @carolineandruskoarquitetos
        </span>
      </Link>
      <Link
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-stone-600 hover:text-stone-900 transition-colors w-fit"
      >
        <InstagramIcon />
      </Link>
    </footer>
  );
}
