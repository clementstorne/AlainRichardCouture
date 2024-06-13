"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LOOKS } from "@/data/looks";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";
import Look from "./Look";
import { Button } from "./ui/button";

const LooksCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleButtonClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className="fade-in-left md:scale-in delay-500"
    >
      <div className="mb-6 flex justify-center items-center gap-2 md:hidden">
        {LOOKS.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={() => handleButtonClick(index)}
          >
            <span className="w-4 h-4">
              <FaCircle
                color={
                  index === current - 1
                    ? "hsl(4 81.2% 45.9%)"
                    : "rgba(0,0,0,50%"
                }
              />
            </span>
          </Button>
        ))}
      </div>
      <CarouselContent>
        {LOOKS.map((look) => (
          <CarouselItem key={look.id}>
            <Look {...look} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center items-center gap-2 max-md:hidden">
        {LOOKS.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={() => handleButtonClick(index)}
          >
            <span className="w-4 h-4">
              <FaCircle
                color={
                  index === current - 1
                    ? "hsl(4 81.2% 45.9%)"
                    : "rgba(0,0,0,50%"
                }
              />
            </span>
          </Button>
        ))}
      </div>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />
    </Carousel>
  );
};

export default LooksCarousel;
