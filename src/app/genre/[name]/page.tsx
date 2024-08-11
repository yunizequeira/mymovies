import Card from '@/components/Card'
import { fetchAllbyGenre} from '@/libs/Fetchers'
import { Metadata } from 'next';
import React from 'react'


export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const name = params.name.split("-")[1];
  return {
    title:name,
  };
}

const GenrePage = async({params}:{params:{name:string}}) => {
    const id = params.name.split("-")[0]
    const data = await fetchAllbyGenre(Number(id))
   
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-10'>
        {
         data.map((data: any) => (
           <Card key={data.id} title={data.title ? data.title : data.name} image={data.poster_path} average={data.vote_average} id={data.id} />
          ))  
        }
      </div>)
}

export default GenrePage
