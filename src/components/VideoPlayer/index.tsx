
const VideoPlayer = ({ video,setIsOpen }: { video: string,setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="z-50 fixed top-0 right-0 left-0 w-full h-screen bg-black/50  flex items-center justify-center p-2 lg:p-10 ">
      <div className="bg-black p-2 lg:p-10 relative h-96 lg:h-full flex flex-col items-center justify-center container mx-auto rounded-2xl shadow-md shadow-blue-700/20">
        <div className="w-full py-5 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Watch Trailer</h2>
          <p className="text-white cursor-pointer text-2xl" onClick={() => setIsOpen(false)}>X</p>
        </div>
        <iframe
          className="w-full aspect-video h-full "
          src={`https://www.youtube.com/embed/${video}?si=1BiNwA3mSKzQZTcD`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
