import { cn } from "@/lib/utils";

type SingleCountdownProps = {
  number: number;
  unit: "days" | "hours" | "minutes" | "seconds";
};

const SingleCountdown = ({ number, unit }: SingleCountdownProps) => {
  const getUnit = (unit: "days" | "hours" | "minutes" | "seconds") => {
    switch (unit) {
      case "days":
        return "jour";
      case "hours":
        return "heure";
      case "minutes":
        return "minute";
      case "seconds":
        return "seconde";
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={cn("flex flex-col items-center", "w-16", "md:w-[139px]")}>
      <span
        className={cn(
          "font-serif font-bold ",
          "text-[42px] -mb-3",
          "md:text-[84px] md:-mb-6",
          "lg:text-[126px] lg:-mb-9"
        )}
      >
        {formatNumber(number)}
      </span>
      <span
        className={cn(
          "font-serif uppercase",
          "text-[12px] font-bold",
          "md:text-[18px]",
          "lg:text-[24px] lg:font-normal"
        )}
      >
        {number > 1 ? getUnit(unit) + "s" : getUnit(unit)}
      </span>
    </div>
  );
};

export default SingleCountdown;
