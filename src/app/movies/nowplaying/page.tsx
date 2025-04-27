import Grid from "@/components/Grid";
import { fetchNowPlaying } from '@/libs/Fetchers';
import type { Metadata } from "next";

export const metadata: Metadata =  {
    title: "Now Playing Movies",
  
};
const NowPlayingMovies = async () => {
  const data = await fetchNowPlaying();
  console.log(data)
  if (data.length > 0) {
    return(
        <Grid content={data} />
    )
  } else {
    throw new Error("Data not found");
  }
};

export default NowPlayingMovies;