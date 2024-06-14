import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LookData } from "@/types";
import Image from "next/image";

type LookCardProps = LookData;

const LookCard = ({
  id,
  title,
  subtitle,
  image,
  description,
}: LookCardProps) => {
  const splitDescription = description.split("\n");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          alt={title}
          width={700}
          height={1500}
          className="w-full h-auto"
        />
      </CardContent>
    </Card>
  );
};

export default LookCard;
