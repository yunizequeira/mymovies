"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { perfiles } from "@/libs/const";
import CardCarrousel from "./CardCarrousel";
import CardDescription from "./CardDescription";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconMovie } from "@tabler/icons-react";
import InfoMovie from "../InfoMovie";
import { get } from "http";

const MyPaginacion = ({ movies }) => {
  const [videos,setVideos] = useState([]);

  const getVideo =  (id) => {
     fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
    ).then((req) => req.json()).then((data) =>data.results[0].key);
  };

  return (
    // <div className="h-full w-full overflow-hidden">
    <Carousel className="w-full h-full ">
      <div className=" w-full z-20 flex justify-end">
          <div className="flex gap-4 z-30 pb-5">
            <div>
              <CarouselPrevious />
            </div>

            <div>
              <CarouselNext />
            </div>
          </div>
        </div>
      <CarouselContent className="w-full h-full ">
        {movies.map((item, index) => (
          <CarouselItem key={index} className="h-full w-full py-10">
            <div className="w-full flex justify-end relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-r from-gray-950 from-20% via-50% lg:via-gray-950/60 via-gray-950/20 lg:to-gray-950/60 to-transparent p-2 ">
                <div className="container mx-auto h-full max-h-[600px] grid grid-cols-3 overflow-y-scroll">
                  <figure className="w-full h-full flex justify-center items-center overflow-hidden lg:p-10 p-5">
                    {item.poster_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        width={1000}
                        height={1000}
                        alt={item.title}
                        className="w-full h-full lg:h-full object-top rounded-md"
                      />
                    ) : (
                      <div className="h-96 w-full flex flex-col justify-center items-center bg-black relative rounded-md">
                        <IconMovie className="w-40 h-96" />
                        <p className="text-xl">No Image</p>
                      </div>
                    )}
                  </figure>
                  <div className="hidden lg:block col-span-2">
                    <InfoMovie
                      id={item.id}
                      average={item.vote_average}
                      genres={item.genres}
                      overview={item.overview}
                      tagline={item.tagline}
                      title={item.title}
                      years={new Date(item.release_date).getFullYear()}
                      key={item.id}
                    />
                  </div>
                </div>
              </div>
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h600_bestv2${item.backdrop_path}`}
                width={1000}
                height={1000}
                alt={item.title}
                className="w-5/6 h-56 lg:h-[70vh] lg:object-cover lg:object-center"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MyPaginacion;
