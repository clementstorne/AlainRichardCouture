import Title from "@/components/Title";
import { getLook } from "@/lib/dataUtils";
import { cn } from "@/lib/utils";
import Image from "next/image";
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

      <h2>{look.title}</h2>
      <h3>{look.subtitle}</h3>

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
          className="w-full h-auto"
        />
        <div className="col-span-2 space-y-4">
          {splitDescription.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
