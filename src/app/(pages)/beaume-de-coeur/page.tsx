import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'Parfum "Beaume de Cœur" - Alain Richard Couture',
  description:
    "Découvrez le parfum &apos;Beaume de Cœur&apos; d&apos;Alain Richard Couture.",
};

const page = () => {
  return (
    <>
      <Title
        textColor="text-black"
        className="bg-intime-sauvage bg-center bg-cover animate-fade-in-fwd"
      >
        Beaume de Cœur
      </Title>
      
    </>
  );
};

export default page;
