"use client";

import { Button } from "@/components/ui/button";
import { scheduleContent } from "@/lib/countdown";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type BurgerButtonProps = {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ className, isOpen, onClick }: BurgerButtonProps) => {
  return (
    <Button
      variant={"link"}
      className={cn("p-0", className)}
      aria-label="Ouvrir le menu"
      onClick={onClick}
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </Button>
  );
};

type Link = {
  href: string;
  label: string;
};

const links: Link[] = scheduleContent(new Date("2024-06-24T15:00:00"))
  ? [
      {
        href: "/",
        label: "Défilé",
      },
      {
        href: "/decouvrir-univers",
        label: "L'univers",
      },
      {
        href: "/intime-sauvage",
        label: "Intime Sauvage",
      },
    ]
  : [
      {
        href: "/",
        label: "Défilé",
      },
      {
        href: "/decouvrir-univers",
        label: "L'univers",
      },
      {
        href: "/intime-sauvage",
        label: "Intime Sauvage",
      },
      {
        href: "/intime-sauvage/looks",
        label: "Looks",
      },
    ];

const Navbar = () => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 h-20 w-screen z-10 bg-slate-50 flex flex-col items-center justify-center",
        "md:h-28",
        "animate-none"
      )}
    >
      <BurgerButton
        className="md:hidden absolute right-5 top-6"
        isOpen={isOpen}
        onClick={handleDrawer}
      />

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
        className={cn(
          "h-6 py-2",
          "flex space-x-8 items-center justify-center",
          "max-md:hidden"
        )}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="navbar-link">
            {link.label}
          </Link>
        ))}
      </nav>

      <nav
        className={cn(
          "fixed top-20 left-0 right-0 h-full bg-slate-50 overflow-auto",
          "flex flex-col justify-start items-center space-y-8 py-8",
          "transform ease-in-out transition-all duration-300",
          isOpen && "translate-x-0",
          !isOpen && "-translate-x-full"
        )}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="navbar-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
