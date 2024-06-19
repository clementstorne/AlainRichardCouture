import Title from "@/components/Title";
import { getLook } from "@/lib/dataUtils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { look: string } }) => {
  const look = getLook(params.look);

  if (!look) {
    redirect("/intime-sauvage/looks");
  }

  const splitDescription = look.description.split("\n");

  return (
    <>
      <Title
        textColor="text-black"
        className="bg-intime-sauvage bg-center bg-cover animate-fade-in-fwd"
      >
        Collection Automne/Hiver 2024 Intime Sauvage
      </Title>

      <h2 className="animate-tilt-in-left delay-700">{look.title}</h2>
      <h3 className="animate-tilt-in-left delay-700">{look.subtitle}</h3>

      <div
        className={cn(
          "grid grid-cols-1 gap-5 items-center",
          "md:grid-cols-3 md:px-5 lg:px-0"
        )}
      >
        <Image
          src={look.image}
          alt={look.title}
          width={700}
          height={1500}
          className="w-full h-auto animate-tilt-in-left delay-1000"
        />
        <div className="col-span-2 space-y-4 text-justify animate-tilt-in-right delay-1000">
          {splitDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Link
        href="/intime-sauvage/looks"
        className="font-sans font-bold text-primary animate-fade-in-fwd delay-1300"
      >
        Voir les autres looks
      </Link>
    </>
  );
};

export default page;
