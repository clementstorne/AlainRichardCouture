import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'Collection Automne/Hiver 2024 "Intime Sauvage" - Alain Richard Couture',
  description:
    "Découvrez la collection Automne/Hiver 2024 'Intime Sauvage' d'Alain Richard Couture. Inspirée par la nature brute du Jura, cette collection célèbre la puissance et l'élégance, avec des matériaux nobles et une approche innovante et responsable. Explorez l'univers 'Intime Sauvage' où la nature rencontre la sophistication humaine.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <main
        className={cn(
          "max-w-240 min-h-screen mb-8 flex flex-col items-center justify-center space-y-8",
          "mx-5 mt-100 ",
          "md:mx-auto md:mt-138 "
        )}
      >
        <Title
          textColor="text-black"
          className="bg-jura bg-center bg-cover animate-fade-in-fwd"
        >
          Collection Automne/Hiver 2024 Intime Sauvage
        </Title>
      </main>
    </>
  );
};

export default page;
