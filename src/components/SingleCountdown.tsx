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
    <div className="w-[139px] flex flex-col items-center">
      <span className="text-[128px] font-bold -mb-9">
        {formatNumber(number)}
      </span>
      <span className="text-[24px] uppercase">
        {number > 1 ? getUnit(unit) + "s" : getUnit(unit)}
      </span>
    </div>
  );
};

export default SingleCountdown;
