import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LookData } from "@/types";
import Image from "next/image";
import Link from "next/link";

type LookCardProps = LookData & { className?: string };

const LookCard = ({
  id,
  url,
  title,
  subtitle,
  image,
  description,
  className,
}: LookCardProps) => {
  return (
    <Link href={`/intime-sauvage/looks/${url}`} className={className}>
      <Card className="hover:shadow-lg h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={image[0]}
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
