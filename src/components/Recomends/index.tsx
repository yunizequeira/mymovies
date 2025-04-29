import { fetchMovieByRecomendation } from '@/libs/Fetchers';
import React from 'react'
import ActorCard from '../ActorCard';
import Card from '../Card';
import MyPaginacion from '@/components/Carousel';

const Recomends = async({id}:{id:number}) => {
    const data = await fetchMovieByRecomendation(id);
  return data.results ? (
    <div className="container mx-auto p-10 space-y-5">
    <h2 className="text-2xl font-semibold">Recomendations</h2>
    <div className="  ">
      {/* {data.results.map((data: any) => ( */}
        <MyPaginacion  key={data.id} movies={data.results} >
           
        </MyPaginacion>
       
      {/* ))} */}
    </div>
  </div>
  ):(
    <div className="container mx-auto p-10 space-y-5">
    <h2 className="text-2xl font-semibold">Recomendations</h2>
    <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-ms-0 ">No recomendations</div>
  </div>
  )
}

export default Recomends
