import FullCountdown from "@/components/FullCountdown";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={cn(
        "max-w-240 min-h-screen flex flex-col items-center justify-center space-y-8 text-center",
        "mx-5",
        "md:mx-auto"
      )}
    >
      <h1 className="sr-only">Alain Richard Couture</h1>

      <Image
        className="w-full"
        src="/alain-richard-couture.svg"
        alt="Alain Richard Couture"
        width={180}
        height={37}
        priority
      />
      <h2
        className={cn(
          "uppercase tracking-[.11em]",
          "text-[28px]",
          "md:text-[38px]",
          "lg:text-[48px]"
        )}
      >
        Intime Sauvage
      </h2>
      <FullCountdown date={new Date("2024-06-24T19:00:00")} />
    </main>
  );
}
