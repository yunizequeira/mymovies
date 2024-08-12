import { IconMovie } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    name?: string;
    profile_path?: string;
  };
}

const PersonCard = ({ data }: Props) => {
  return data.profile_path !== null || data.profile_path !== undefined ? (
    <Link
      href={`/actor/${data.id}-${data.name}`}
      className="flex-none rounded-md"
    >
      <div className="h-96 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          width={500}
          height={500}
          alt={data.name || "no title"}
          className="rounded-md w-full h-full "
          priority={false}
        />
      </div>
    </Link>
  ) : null;
};

export default PersonCard;
