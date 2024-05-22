import FullCountdown from "@/components/FullCountdown";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen max-w-[960px] mx-auto flex flex-col items-center justify-center space-y-8">
      <Image
        className="w-full"
        src="/alain-richard-couture.svg"
        alt="Alain Richard Couture"
        width={180}
        height={37}
        priority
      />
      <h1 className="font-serif uppercase text-[48px] tracking-[.11em] ">
        Intime Sauvage
      </h1>
      <FullCountdown date={new Date("2024-06-24T19:00:00")} />
    </main>
  );
}
