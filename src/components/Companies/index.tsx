import Image from "next/image";

const Companies = ({
  data,
}: {
  data: { name: string; logo_path: string }[];
}) => {
  return (
    <div className="container mx-auto p-10 space-y-5">
      <h2 className="text-2xl font-semibold">Production Companies</h2>
      <div className=" flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-ms-0 ">
        {data.map((company: { name: string; logo_path: string }) => (
          <div key={company.name} className="max-w-52 h-52 flex-none ">
            {company.logo_path && (
                   <figure
                className="w-full h-full rounded overflow-hidden bg-blue-300 flex justify-center items-center p-5 relative"
                key={company.name}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                  width={500}
                  height={500}
                  alt={company.name}
                  className="rounded-md"
                  priority={false}
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-r from-gray-950/40 from-20% via-50% lg:via-gray-950/10 via-gray-950/20 lg:to-gray-950/30 to-transparent flex items-center justify-center p-5">
                  <p className="text-xl font-semibold">{company.name}</p>
                </div>
              </figure>
           
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
