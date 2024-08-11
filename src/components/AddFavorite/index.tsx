"use client";
import { IconHeart } from "@tabler/icons-react";
const AddFavorite = () => {
  return (
    <button
      className=" favorite"
      onClick={() => {
        alert("adding... to favorite");
      }}
    >
      <div className="bg-green-400 rounded-full inline-block p-2">
        <IconHeart size={24} />
      </div>

      {/* <p className="text-xs text-slate-400">Add to favorite</p> */}
    </button>
  );
};

export default AddFavorite;
