"use client";

import SingleCountdown from "@/components/SingleCountdown";
import { getRemainingTime } from "@/lib/countdown";
import { useEffect, useState } from "react";

type FullCountdownProps = {
  date: Date;
};

const FullCountdown = ({ date }: FullCountdownProps) => {
  const getInitialRemainingTime = () => getRemainingTime(date);

  const [days, setDays] = useState(getInitialRemainingTime().days);
  const [hours, setHours] = useState(getInitialRemainingTime().hours);
  const [minutes, setMinutes] = useState(getInitialRemainingTime().minutes);
  const [seconds, setSeconds] = useState(getInitialRemainingTime().seconds);

  useEffect(() => {
    const updateRemainingTime = () => {
      const updatedRemainingTime = getRemainingTime(date);
      setDays(updatedRemainingTime.days);
      setHours(updatedRemainingTime.hours);
      setMinutes(updatedRemainingTime.minutes);
      setSeconds(updatedRemainingTime.seconds);
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className="flex items-center space-x-20">
      <SingleCountdown number={days} unit="days" />
      <SingleCountdown number={hours} unit="hours" />
      <SingleCountdown number={minutes} unit="minutes" />
      <SingleCountdown number={seconds} unit="seconds" />
    </div>
  );
};

export default FullCountdown;
