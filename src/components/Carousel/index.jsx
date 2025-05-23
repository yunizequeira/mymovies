"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../Card";

const MyPaginacion = ({ movies}) => {


  return (
    // <div className="h-full w-full overflow-hidden">
    <Carousel className="w-full h-full ">
      <div className=" w-full z-20 flex justify-end">
          <div className=" hidden lg:flex gap-4 z-30 pb-5">
            <div>
              <CarouselPrevious className="bg-black text-white" />
            </div>

            <div>
              <CarouselNext className="bg-black text-white"/>
            </div>
          </div>
        </div>
      <CarouselContent className="w-full h-full ">
        {movies.map((item, index) => (
          <CarouselItem key={index} className="h-full w-full py-10  sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Card
          key={item.id}
          id={item.id}
          image={item.poster_path}
          title={item.name ? item.name : item.title}
          average={item.vote_average}
        />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MyPaginacion;
