import AllMovies from "@/components/Allmovies";
import Card from "@/components/Card";
import { fetchAllbySearch } from "@/libs/Fetchers";

interface Props {
  searchParams?: {
    search?: string;
  };
}

const MoviesPage = async ({ searchParams }: Props) => {
  const search = searchParams?.search;
  console.log(search);
  if (search) {
    const movies = await fetchAllbySearch(search);
    console.log(movies);
    return movies.length > 0 ? (
      <div className="min-h-screen p-5 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((data: any) => (
            <Card
              key={data.id}
              title={data.title ? data.title : data.name}
              image={data.poster_path}
              average={data.vote_average}
              id={data.id}
            />
          ))}
        </div>
      </div>
    ): (
      <div className="min-h-screen p-5 container mx-auto">
        <h3 className="text-center text-semibold text-4xl">No movies found</h3>
      </div>)
  }
  return (
    <div className="min-h-screen p-5 container mx-auto">
      <AllMovies />
    </div>
  );
};

export default MoviesPage;
