import Card from "../Card";
import PersonCard from "../PersonCard";

interface Props {
  content: {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    vote_average?: number;
    profile_path?: string;
    media_type?: string;
  }[];
}

const Grid = ({ content }: Props) => {
  console.log(content);
  return (
    <div className="min-h-screen p-5 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content.map((data) => (
          <>
            {data.poster_path && data.media_type === "movie" && (
              <Card
                key={data.id}
                title={data.title || data.name}
                image={data.poster_path || ""}
                average={data.vote_average || 0}
                id={data.id}
              />
            )}
            {data.media_type === "person" && data.profile_path && (
              <PersonCard data={data} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Grid;
