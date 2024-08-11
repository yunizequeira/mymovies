"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICard } from "@/libs/Types";
import InfoMovie from "../InfoMovie";
import Link from "next/link";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const Banner = ({ data }: { data: ICard[] }) => {
  const [show, setShow] = useState(0);
  const [movieShow, setMovieShow] = useState<ICard>(data[show] as ICard);

  useEffect(() => {
    setMovieShow(data[show]);
  }, [show, data]);

  const next = () => {
    if (show < data.length - 1) {
      setShow(show + 1);
    } else {
      setShow(0);
    }
  };

  const back = () => {
    if (show === 0) {
      setShow(data.length - 1);
    } else {
      setShow(show - 1);
    }
  };
  return (
    data.length > 0 && (
      <div className="w-full h-96 lg:h-[calc(100vh-120px)] relative overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieShow.backdrop_path}`}
          width={1000}
          height={1000}
          alt={"movies"}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 flex items-center min-h-96 py-10 ">
         
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 py-5 ">
          <div className=" h-full flex items-center justify-between px-2 lg:px-10">
            <div onClick={back} className="cursor-pointer p-2"> 
              <IconArrowLeft size={40} />
            </div>

            <div onClick={next} className="cursor-pointer p-2">
              <IconArrowRight size={40} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
