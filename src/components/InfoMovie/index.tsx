'use client';
import CircularRaiting from "../CircularRaiting";
import Genres from "@/components/Genres";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer";

const InfoMovie = ({
  // id,
  title,
  years,
  genres,
  average,
  tagline,
  overview,
  video
}: {
  // id: number;
  title?: string;
  years: number;
  genres?: { id: number; name: string }[];
  average: number;
  tagline: string;
  overview: string;
  video:string
}) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
   <>
    <article className="w-full p-10 col-span-2 space-y-5">
      <h1 className="text-4xl font-bold">
        {title} <span className="font-normal">({years})</span>
      </h1>
      <div>
        <Genres genres={genres} />
      </div>
      <div className="space-y-5">
        <div className="h-14 w-14 lg:h-32 lg:w-32">
          <CircularRaiting value={Number(average.toFixed(1)) * 10} />
        </div>

        <div className="flex gap-2 items-center">
          <div
            className="hover:text-slate-400/50 transition-colors duration-300 rounded-full  inline-block border border-green-400"
            onClick={() => setIsOpen(true)}
          >
            <div className="cursor-pointer flex items-center justify-center gap-2  px-4 py-2 ">
              <IconPlayerPlay />
              <p className="">Play Trailer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-xl font-light text-slate-300/70">{tagline}</h2>
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </article>
    {
       isOpen && <VideoPlayer video={video} setIsOpen={setIsOpen}/>
    }
   </>
  );
};

export default InfoMovie;
