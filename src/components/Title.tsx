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
        "absolute top-20 w-full h-118",
        "flex justify-center items-center",
        className
      )}
    >
      <h1 className={cn("max-w-240 mx-5 md:mx-auto", textColor)}>{children}</h1>
    </div>
  );
};

export default Title;
