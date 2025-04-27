import Image from "next/image";
const CardDescription = ({
  profession,
  comment,
}: {
  profession: string;
  comment: string;
}) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full grid gap-4 bg-black/50">
      <div className="w-full another-gradient boxShadow p-10 rounded-2xl">
        <div className="py-5 border-b-2  border-black/10">
          <h3 className="text-2xl font-semibold text-white">{profession}</h3>
        </div>
        <p className="text-slate-300 text-lg pt-5">{comment}</p>
      </div>
    </div>
  );
};

export default CardDescription;
