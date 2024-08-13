import Grid from "@/components/Grid";
import { fetchTrending } from "@/libs/Fetchers";
import React from "react";

const PolpulareMovies = async () => {
  const data = await fetchTrending();
  if (data.length > 0) {
    return(
        <Grid content={data}/>
    )
  } else {
    throw new Error("Data not found");
  }
};

export default PolpulareMovies;
