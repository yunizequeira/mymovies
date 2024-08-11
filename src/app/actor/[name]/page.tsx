import {
  fetchMoviesByPersonId,
  fetchPersonById,
  fetchPersonSocialById,
} from "@/libs/Fetchers";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTiktokFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FormatterDay } from '../../../utils/DayFormatter/index';

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const id = params.name.split("-")[0];
  const data = await fetchPersonById(Number(id));
  return {
    title: data.name,
    description: data.biography,
  };
}

const ActorPage = async ({ params }: { params: { name: string } }) => {
  const id = params.name.split("-")[0];
  const data = await fetchPersonById(Number(id));
  console.log(data);
  const movies = await fetchMoviesByPersonId(Number(id));
  const moviesdec: [
    {
      id: number;
      title: string;
      poster_path: string;
    }
  ] = movies.reverse();
  const socials = await fetchPersonSocialById(Number(id));
  console.log(socials);
  return (
    <>
      <div className="container mx-auto py-10">
        <div className=" grid lg:grid-cols-3 gap-5 p-2">
          <div className="h-[500px] w-auto flex justify-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
              width={1000}
              height={1000}
              alt={data.name}
              className="h-full w-auto rounded"
            />
          </div>

          <div className="lg:col-span-2 lg:p-5 space-y-5">
            <div>
              <h1 className="text-xl lg:text-5xl font-bold">
                {data.name} ,{" "}
                <span className="text-blue-500">
                  {data.known_for_department}
                </span>
              </h1>
            </div>
            <div className="space-y-4 w-full overflow-hidden">
              <h2 className="text-xl font-bold">Biography</h2>
              <p>{data.biography}</p>
            </div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5 p-2">
          <div className="w-full">
            <div className=" w-full flex justify-center">
              {socials && <div className="flex gap-5 py-2">
                <Link
                  href={`https://www.facebook.com/${socials.facebook_id}`}
                  target="_blank"
                >
                  <IconBrandFacebookFilled />
                </Link>
                <Link
                  href={`https://www.instagram.com/${socials.instagram_id}`}
                  target="_blank"
                >
                  <IconBrandInstagram  />
                </Link>
                <Link
                  href={`https://www.tiktok.com/@${socials.tiktok_id}`}
                  target="_blank"
                >
                  <IconBrandTiktokFilled  />
                </Link>
              </div>}
            </div>
            <div className="p-2 ">
              <h1 className="text-xl  font-bold">Personal Info</h1>
              <div>
                <h3 className="font-bold">Know for</h3>
                <p>{data.known_for_department}</p>
              </div>
              <div>
                <h3 className="font-bold">Birthday</h3>
                <p>{FormatterDay(data.birthday)}</p>
              </div>
              <div>
                <h3 className="font-bold">Place of Birth</h3>
                <p>{data.place_of_birth}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 h-60">
            <div className=" w-full  flex gap-1 overflow-x-auto snap-x snap-mandatory px-5 scroll-m-0 scroll-ms-0">
              {moviesdec.map((movie) =>
                movie.poster_path ? (
                  <Link
                    href={`/movie/${movie.id}-${movie.title}`}
                    key={movie.id}
                    className="w-60 h-60 flex-none"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      width={500}
                      height={500}
                      alt={movie.title}
                      className="h-full w-full rounded"
                    />
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorPage;
