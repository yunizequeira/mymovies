import SeriesGrid from '@/components/SeriesGrid';
import { fetchOnAirSeries } from '@/libs/Fetchers';

const OnTheAir = async() => {
    const data = await fetchOnAirSeries();
    if (data.length > 0) {
      return(
          <SeriesGrid content={data}/>
      )
    } else {
      throw new Error("Data not found");
    }
}

export default OnTheAir
