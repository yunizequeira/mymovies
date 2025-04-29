import Link from "next/link";
import Image from "next/image";
import { FormatterDay } from "../../utils/DayFormatter/index";
import { IconMovie } from "@tabler/icons-react";

interface Props {
  id: number;
  title?: string;
  image: string;
  average: number;
}
const SeriesCard = ({ title, image, average, id }: Props) => {
  return (
    <Link href={`/series/${id}-${title}`} className="flex-none rounded-md  ">
      <div className="h-96 relative">
        {image !== null ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            width={500}
            height={500}
            alt={title|| "no title"}
            className="rounded-md w-full h-full border-4 border-transparent hover:border-blue-800 transition-colors duration-300 shadow"
            priority={false}
          />
        ) : (
          <div className="h-96 w-full flex flex-col justify-center items-center bg-black relative ">
            <IconMovie className="w-40 h-96" />
            <p className="text-xl">No Image</p>
          </div>
        )}
        <div
          className={`absolute top-0 right-0 p-2 rounded-tr-md font-semibold ${
            Number(average.toFixed(1)) * 10 < 50
              ? "bg-red-500"
              : Number(average.toFixed(1)) * 10 < 65
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          <p>{Number(average.toFixed(1)) * 10}</p>
        </div>
      </div>
    </Link>
  );
};

export default SeriesCard;