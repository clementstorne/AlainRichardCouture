import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-20 z-10 bg-slate-50 flex items-center justify-center">
      <Link href="/">
        <Image
          className="h-full"
          src="/alain-richard-couture-logo.svg"
          alt="Alain Richard Couture"
          width={180}
          height={37}
          priority
        />
      </Link>
    </header>
  );
};

export default Navbar;
