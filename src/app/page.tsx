import Grid from "@/components/Grid";
import { fetchAllbySearch, fetchAllResults } from "@/libs/Fetchers";
import type { Metadata } from "next";

export const metadata: Metadata =  {
    title: "Movies",
  
};

interface Props {
  searchParams?: {
    search?: string;
  };
}

const MoviesPage = async ({ searchParams }: Props) => {
  const search = searchParams?.search;
  const allResults = await fetchAllResults();
  if (search) {
    const movies = await fetchAllbySearch(search);
    return movies.length > 0 ? (
      <Grid content={movies} />
    ) : (
      <div className="min-h-screen p-5 container mx-auto">
        <h3 className="text-center text-semibold text-4xl">No movies found</h3>
      </div>
    );
  }
  return (
    <Grid content={allResults} />
  );
};

export default MoviesPage;
