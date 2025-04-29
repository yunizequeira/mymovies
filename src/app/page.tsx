import Grid from "@/components/Grid";
import { fetchAllbySearch, fetchAllResults } from "@/libs/Fetchers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
};

type SearchParams = { [key: string]: string | string[] | undefined };

const MoviesPage = async () => {
  const allResults = await fetchAllResults();
  return <Grid content={allResults} />;
};

export default MoviesPage;
