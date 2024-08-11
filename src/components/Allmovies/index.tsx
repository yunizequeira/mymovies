import { fetchAllResults } from "@/libs/Fetchers";
import Card from "../Card";


const AllMovies = async () => {
    const allResults = await fetchAllResults();
   
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
       allResults.map((data: any) => (
         <Card key={data.id} title={data.title ? data.title : data.name} image={data.poster_path} average={data.vote_average} id={data.id} />
        ))  
      }
    </div>
  )
}

export default AllMovies
