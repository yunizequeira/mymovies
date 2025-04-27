import Grid from '@/components/Grid';
import { fetchOnAirSeries, fetchPopularSeries } from '@/libs/Fetchers';

const Popular = async() => {
    const data = await fetchPopularSeries();
    if (data.length > 0) {
      return(
          <Grid content={data}/>
      )
    } else {
      throw new Error("Data not found");
    }
}

export default Popular