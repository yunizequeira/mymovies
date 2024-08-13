import Grid from "@/components/Grid";
import { fetchNowPlaying } from '@/libs/Fetchers';
import React from "react";

const NowPlayingMovies = async () => {
  const data = await fetchNowPlaying();
  if (data.length > 0) {
    return(
        <Grid content={data} />
    )
  } else {
    throw new Error("Data not found");
  }
};

export default NowPlayingMovies;