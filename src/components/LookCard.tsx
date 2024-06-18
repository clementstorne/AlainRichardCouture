import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LookData } from "@/types";
import Image from "next/image";
import Link from "next/link";

type LookCardProps = LookData;

const LookCard = ({
  id,
  url,
  title,
  subtitle,
  image,
  description,
}: LookCardProps) => {
  return (
    <Link href={`/intime-sauvage/looks/${url}`}>
      <Card className="hover:shadow-lg">
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
    </Link>
  );
};

export default LookCard;
