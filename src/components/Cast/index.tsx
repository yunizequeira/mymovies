import { fetchMovieByCredits } from "@/libs/Fetchers";
import React from "react";
import ActorCard from "../ActorCard";

const Cast = async ({ id }: { id: number }) => {
  const data = await fetchMovieByCredits(id);
  return (
    <div className="container mx-auto p-10 space-y-5">
      <h2 className="text-2xl font-semibold">Top Cast</h2>
      <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-ms-0 ">
        {data.cast.map((data: any) => (
          <ActorCard
            key={data.id}
            id={data.id}
            image={data.profile_path}
            name={data.name}
            character={data.character ? data.character : data.job}
          />
        ))}
      </div>
    </div>
  );
};

export default Cast;
