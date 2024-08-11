import Banner from "@/components/Baner";
import NowPlaying from "@/components/NowPlaying";
import TopRated from "@/components/TopRated";
import Trading from "@/components/Trending";
import Uncoming from "@/components/Uncoming";
import { fetchAllResults } from "@/libs/Fetchers";

export default async function Home() {
  const data = await fetchAllResults();
  const movies = data.slice(0, 5);
  return (
    <main className="min-h-screen pb-10">
     
      <Banner data={movies} />
      <div className="container mx-auto px-2 py-10">
        <Uncoming/>
      </div>
      <div className="container mx-auto px-2 py-10">
        <NowPlaying />
      </div>
      <div className="container mx-auto px-2 py-10">
        <TopRated />
      </div>
      <div className="container mx-auto px-2 py-10">
        <Trading />
      </div>
    </main>
  );
}
