"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../Card";
import ActorCard from "../ActorCard";

const CarouselCast = ({ actors}: any) => {


  return (
    // <div className="h-full w-full overflow-hidden">
    <Carousel className="w-full h-full ">
      <div className=" w-full z-20 flex justify-end">
          <div className="gap-4 z-30 pb-5 hidden lg:flex">
            <div>
              <CarouselPrevious className="bg-black text-white" />
            </div>

            <div>
              <CarouselNext className="bg-black text-white"/>
            </div>
          </div>
        </div>
      <CarouselContent className="w-full h-full ">
        {actors.map((item:any) => (
          <CarouselItem key={item.id} className="h-full w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
            <ActorCard
              key={item.id}
              id={item.id}
              image={item.profile_path}
              name={item.name}
              character={item.character}
        />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCast;
