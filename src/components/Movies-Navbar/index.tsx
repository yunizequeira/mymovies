"use client";
import Link from "next/link";
import { IconChevronCompactUp } from "@tabler/icons-react";
import {motion} from 'framer-motion'

const MenuNavbar = ({
  show,
  setShow,
}: {
  show: { category: string; value: boolean };
  setShow: React.Dispatch<
    React.SetStateAction<{ category: string; value: boolean }>
  >;
}) => {
  const hanndleHover = () => {
    setShow({ category: "movies", value: true });
  };

  const hanndleHoverLeave = () => {
    setShow({ category: "", value: false });
  };
  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={hanndleHover}
      onMouseLeave={hanndleHoverLeave}
    >
      <div className="group px-5 py-2 rounded flex items-center gap-1">
        <button>Movies</button>
        <IconChevronCompactUp
          className={
            show.category === "movies"
              ? "w-4 h-4 transition-transform duration-200"
              : "w-4 h-4 rotate-180 "
          }
        />
      </div>

      {show.category === "movies" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={
            show
              ? "absolute top-10 -left-10 bg-gray-900 py-10 rounded-lg z-10 flex flex-col items-center gap-2 w-36 border-4 border-blue-700"
              : "hidden"
          }
          onMouseOver={hanndleHover}
          onMouseLeave={hanndleHoverLeave}
        >
          <Link
            href={"/movies/popular"}
            className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
            onClick={() => setShow({ category: "", value: false })}
          >
            Populars{" "}
          </Link>
          <Link
            href={"/movies/uncoming"}
            className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
            onClick={() => setShow({ category: "", value: false })}
          >
            Uncoming{" "}
          </Link>
          <Link
            href={"/movies/nowplaying"}
            className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
            onClick={() => setShow({ category: "", value: false })}
          >
            Now Playing{" "}
          </Link>
          <Link
            href={"/movies/toprated"}
            className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
            onClick={() => setShow({ category: "", value: false })}
          >
            Top Rated{" "}
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default MenuNavbar;
