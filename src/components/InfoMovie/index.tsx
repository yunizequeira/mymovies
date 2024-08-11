import React from 'react'
import CircularRaiting from '../CircularRaiting'
import Genres from '@/components/Genres';
import WatchTrailer from '../WatchTrailer';
import AddFavorite from '../AddFavorite';

const InfoMovie = ({title, video, years,genres,average,tagline,overview}: {title?: string, video?: string, years: number,genres?: {id:number, name:string}[],average: number,tagline: string,overview: string}) => {
  return (
    <article className="w-full p-10 col-span-2 space-y-5">
    <h1 className="text-4xl font-bold">
      {title} <span className="font-normal">({years})</span>
    </h1>
    <div >
      <Genres genres={genres} />
    </div>
    <div className="space-y-5">
      <div className='h-14 w-14 lg:h-32 lg:w-32'>
        <CircularRaiting value={Number(average.toFixed(1)) * 10} />
      </div>
      
      <div className="flex gap-2 items-center">
        <AddFavorite />
      {video && <WatchTrailer video={video} />}
      </div>
      
    </div>
    <div className="space-y-5">
      <h2 className="text-xl font-light text-slate-300/70">
        {tagline}
      </h2>
      <div>
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  </article>
  )
}

export default InfoMovie
