import { fetchMovieByCredits } from "@/libs/Fetchers";
import React from "react";
import ActorCard from "../ActorCard";
import CarouselCast from "../Carousel/CarouselCast";

const Cast = async ({ id }: { id: number }) => {
  const data = await fetchMovieByCredits(id);
  return data.cast ? (
    <div className="container mx-auto p-10 space-y-5">
      <h2 className="text-2xl font-semibold">Top Cast</h2>
      <div className=" ">
        <CarouselCast actors={data.cast} />
      </div>
    </div>
  ): (
    <div className="container mx-auto p-10 space-y-5">
      <h2 className="text-2xl font-semibold">Top Cast</h2>
      <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-ms-0 ">No Cast</div>
    </div>
  );
};

export default Cast;
