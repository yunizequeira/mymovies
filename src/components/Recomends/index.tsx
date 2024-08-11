import { fetchMovieByRecomendation } from '@/libs/Fetchers';
import React from 'react'
import ActorCard from '../ActorCard';
import Card from '../Card';

const Recomends = async({id}:{id:number}) => {
    const data = await fetchMovieByRecomendation(id);
  return (
    <div className="container mx-auto p-10 space-y-5">
    <h2 className="text-2xl font-semibold">Recomendations</h2>
    <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-ms-0 ">
      {data.results.map((data: any) => (
        <Card
          key={data.id}
          id={data.id}
          image={data.poster_path}
          title={data.name ? data.name : data.title}
          average={data.vote_average}
        />
      ))}
    </div>
  </div>
  )
}

export default Recomends
