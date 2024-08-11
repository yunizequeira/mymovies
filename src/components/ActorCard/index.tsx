import Image from "next/image";
import { IconUserFilled } from "@tabler/icons-react";
import Link from "next/link";
interface Props {
  id:number;
  image?: string;
  name: string;
  character: string[];
}

const ActorCard = ({ image, name, character ,id}: Props) => {
  return (
    <>
      <Link href={`/actor/${id}-${name}`} className="px-2 space-y-2 shadow-sm ">
        <figure className="min-w-40 w-52 h-52 rounded overflow-hidden">
          {image !== null ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              width={500}
              height={500}
              alt={name}
              className="rounded-md"
            />
          ) : (
            <IconUserFilled  className="w-40 h-52"/>
          )}
        </figure>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>

        {/* {
        character.map((char,index) => <p key={index}>{char}</p>)
      } */}
      </Link>
    </>
  );
};

export default ActorCard;
