import Grid from "@/components/Grid";
import { fetchToRated } from '@/libs/Fetchers';
import type { Metadata } from "next";

export const metadata: Metadata =  {
    title: "Top Rated Movies",
  
};

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