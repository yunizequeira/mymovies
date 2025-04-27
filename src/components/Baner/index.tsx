"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICard } from "@/libs/Types";
import InfoMovie from "../InfoMovie";
import Link from "next/link";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const Banner = ({ data }: { data: ICard }) => {
  return (
    <div className="container mx-auto h-96 lg:h-[800px] w-full flex justify-center items-center p-5 overflow-hidden">
      <div className="w-full h-full shadow-sm shadow-black/50 rounded-md relative">
         <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          width={500}
          height={281}
          alt={data.title!}
          className="w-full h-full rounded-md object-cover object-center    "
          priority={false}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-end  text-white z-10 p-5">
        <p className="text-sm uppercase text-white">Pelicula</p>
        <h2 className="text-3xl font-semibold">{data.title}</h2>
      </div>
      </div>
       
      
    </div>
  );
};

export default Banner;
