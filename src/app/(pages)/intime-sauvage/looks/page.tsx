import LookCard from "@/components/LookCard";
import Title from "@/components/Title";
import { LOOKS } from "@/data/looks";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'Collection Automne/Hiver 2024 "Intime Sauvage" - Alain Richard Couture',
  description:
    "Découvrez la collection Automne/Hiver 2024 &apos;Intime Sauvage&apos; d&apos;Alain Richard Couture. Inspirée par la nature brute du Jura, cette collection célèbre la puissance et l&apos;élégance, avec des matériaux nobles et une approche innovante et responsable. Explorez l&apos;univers &apos;Intime Sauvage&apos; où la nature rencontre la sophistication humaine.",
};

const page = () => {
  const getDelay = (index: number) => {
    const delay = 1000 + 200 * index;
    return `delay-${delay}`;
  };

  return (
    <>
      <Title
        textColor="text-black"
        className="bg-intime-sauvage bg-center bg-cover animate-fade-in-fwd"
      >
        Découvrez les looks de la collection Intime Sauvage
      </Title>

      <div
        className={cn(
          "grid grid-cols-1 gap-5 place-items-stretch",
          "md:grid-cols-3 md:px-5 lg:px-0"
        )}
      >
        {LOOKS.map((look, index) => (
          <LookCard
            key={look.id}
            {...look}
            className={`animate-tilt-in-left`}
          />
        ))}
      </div>
    </>
  );
};

export default page;
