import Grid from "@/components/Grid";
import { fetchToRated } from '@/libs/Fetchers';
import React from "react";

const TopRatedMovies = async () => {
  const data = await fetchToRated();
  if (data.length > 0) {
    return(
        <Grid content={data} />
    )
  } else {
    throw new Error("Data not found");
  }
};

export default TopRatedMovies;