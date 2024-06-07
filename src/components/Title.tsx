import { cn } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  textColor?: string;
  className?: string;
};

const Title = ({
  children,
  textColor = "text-black",
  className,
}: TitleProps) => {
  return (
    <div
      className={cn(
        "absolute w-full",
        "flex justify-center items-center",
        "h-80 top-20",
        "md:h-118 md:top-28",
        className
      )}
    >
      <h1 className={cn("max-w-240 mx-5 md:mx-auto", textColor)}>{children}</h1>
    </div>
  );
};

export default Title;
