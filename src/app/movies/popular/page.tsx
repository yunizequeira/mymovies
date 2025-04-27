import Grid from "@/components/Grid";
import { fetchTrending } from "@/libs/Fetchers";
import type { Metadata } from "next";

export const metadata: Metadata =  {
    title: "Popular Movies",
  
};
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
