import Grid from '@/components/Grid';
import { fetchAllbySearch } from '@/libs/Fetchers';

const SearchPage = async({ searchParams }:{searchParams: { search: string }}) => {
    const { search} = searchParams
    if (search) {
      const movies = await fetchAllbySearch(search);
      return movies.length > 0 ? (
        <Grid content={movies} />
      ) : (
        <div className="min-h-[calc(100vh-200px)] p-5 container mx-auto flex items-center justify-center">
          <h3 className="text-center text-semibold text-4xl">No movies found for <span className='text-red-600'>{search}</span> </h3>
        </div>
      );
    }
}

export default SearchPage
