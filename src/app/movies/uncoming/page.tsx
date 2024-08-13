import Grid from "@/components/Grid";
import { fetchUncoming } from '@/libs/Fetchers';
import React from "react";

const UncomingMovies = async () => {
  const data = await fetchUncoming();
  if (data.length > 0) {
    return(
        <Grid content={data} />
    )
  } else {
    throw new Error("Data not found");
  }
};

export default UncomingMovies;
