import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 h-28 w-full z-10 bg-slate-50 flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          className="h-20"
          src="/alain-richard-couture-logo.svg"
          alt="Alain Richard Couture"
          width={180}
          height={37}
          priority
        />
      </Link>
      <nav
        className={cn("h-6 py-2", "flex space-x-8 items-center justify-center")}
      >
        <Link className="navbar-link" href="a-propos">
          Inspirations
        </Link>
        <Link className="navbar-link" href="intime-sauvage">
          Intime Sauvage
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
