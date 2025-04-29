import {  fetchSeriesById } from "@/libs/Fetchers";
import Image from "next/image";
import type { Metadata } from "next";
import InfoMovie from "@/components/InfoMovie";
import Cast from "@/components/Cast";
import Recomends from "@/components/Recomends";
import { IconMovie } from "@tabler/icons-react";
import Companies from "@/components/Companies";

interface Props {
  params: {
    name: string;
  };
  searchParams: {
    watch: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.name.split("-")[0];
  const data = await fetchSeriesById(Number(id));
  return {
    title: data.name,
    description: data.overview,
  };
}

const SeriesById = async ({ params, searchParams }: Props) => {
  const search = searchParams.watch;
  const id = params.name.split("-")[0];
  const data = await fetchSeriesById(Number(id));
  const years = new Date(data.first_air_date).getFullYear();
  const req = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=944a8b04756c24bc60299b22c3747426&language=en-US`
  );
  const { results } = await req.json();

  const video = results && results.length > 0 && results[0].key ? results[0].key : "";
  return data && (
    <div
      className={`relative ${
        search ? "h-[calc(100vh-120px)] overflow-hidden" : "block"
      }`}
    >

      <div>
        <div className="w-full flex justify-end relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-r from-gray-950 from-20% via-50% lg:via-gray-950/60 via-gray-950/20 lg:to-gray-950/60 to-transparent p-2 ">
            <div className="container mx-auto h-full max-h-[600px] grid grid-cols-3 overflow-y-scroll">
              <figure className="w-full h-full flex justify-center items-center overflow-hidden lg:p-10 p-5">
                {data.poster_path ? <Image
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  width={1000}
                  height={1000}
                  alt={data.name}
                  className="w-full h-full lg:h-full object-top rounded-md"
                />:(<div className="h-96 w-full flex flex-col justify-center items-center bg-black relative rounded-md">
                  <IconMovie className="w-40 h-96"/>
                  <p className="text-xl">No Image</p>
                  </div>)}
              </figure>
              <div className="hidden lg:block col-span-2">
                <InfoMovie
                  average={data.vote_average}
                  genres={data.genres}
                  overview={data.overview}
                  tagline={data.tagline}
                  title={data.name}
                  video={video}
                  years={years}
                  key={data.id}
                />
              </div>
            </div>
          </div>
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h600_bestv2${data.backdrop_path}`}
            width={1000}
            height={1000}
            alt={data.name}
            className="w-5/6 h-56 lg:h-[70vh] lg:object-cover lg:object-center"
            priority
          />
        </div>
        <div>
          <div className="lg:hidden block w-full">
            <InfoMovie
              average={data.vote_average ? data.vote_average : 0}
              genres={data.genres}
              overview={data.overview}
              tagline={data.tagline}
              title={data.name}
              video={video}
              years={years}
              key={data.id}
            />
          </div>
          <div>
             <Cast id={data.id} />
          </div>
         <div>
          <Companies data={data.production_companies} />
         </div>
          <div>
            <Recomends id={data.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesById;
