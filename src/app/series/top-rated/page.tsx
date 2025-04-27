import Grid from '@/components/Grid';
import { fetchOnAirSeries, fetchTopRatedSeries } from '@/libs/Fetchers';

const TopRated = async() => {
    const data = await fetchTopRatedSeries();
    if (data.length > 0) {
      return(
          <Grid content={data}/>
      )
    } else {
      throw new Error("Data not found");
    }
}

export default TopRated