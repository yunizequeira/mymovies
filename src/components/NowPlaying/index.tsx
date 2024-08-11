import Card from '../Card';
import {fetchNowPlaying} from '@/libs/Fetchers';


const NowPlaying = async() => {
    const results = await fetchNowPlaying();
    return (
      <>
        <div className="p-10">
          <h1 className="text-3xl lg:text-6xl font-bold text-left ">
            Now Playing
          </h1>
        </div>
  
        <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory px-5 scroll-m-0 scroll-ms-0">
          {results.map((data: any) => (
            <Card
              key={data.id}
              title={data.title ? data.title : data.name}
              image={data.poster_path}
              average={data.vote_average}
              id={data.id}
            />
          ))}
        </div>
      </>
  )
}

export default NowPlaying
