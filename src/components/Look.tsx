import { cn } from "@/lib/utils";
import { LookData } from "@/types";
import Image from "next/image";

type LookProps = LookData;

const Look = ({ id, title, subtitle, image, description }: LookProps) => {
  const splitDescription = description.split("\n");
  return (
    <div
      className={cn("grid grid-cols-1 gap-5 items-center", "md:grid-cols-3")}
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={1500}
        className="w-full h-auto"
      />
      <div className="space-y-4 md:col-span-2">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {splitDescription.map((paragraph, index) => (
          <p key={index} className="text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Look;
