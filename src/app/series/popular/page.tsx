import SeriesGrid from '@/components/SeriesGrid';
import {  fetchPopularSeries } from '@/libs/Fetchers';

const Popular = async() => {
    const data = await fetchPopularSeries();
    if (data.length > 0) {
      return(
          <SeriesGrid content={data}/>
      )
    } else {
      throw new Error("Data not found");
    }
}

export default Popular