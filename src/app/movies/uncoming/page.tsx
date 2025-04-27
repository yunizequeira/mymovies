import Grid from "@/components/Grid";
import { fetchUncoming } from '@/libs/Fetchers';
import type { Metadata } from "next";

export const metadata: Metadata =  {
    title: "Uncoming Movies",
  
};

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
