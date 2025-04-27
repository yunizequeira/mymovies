"use client";
import { IconMenu3, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      <div
        
        className="flex justify-end items-center w-full h-full"
      >
        {isOpen ? (
          <IconX
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <IconMenu3
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }} className="fixed top-20 left-0 w-full h-screen bg-slate-900 p-10 backdrop-blur-lg rounded-b-lg text-lg overflow-y-scroll">
          <ul className="flex flex-col gap-5 ">
            <li className="cursor-pointer">
              <Link
                className="hover:bg-blue-700 flex-nowrap inline-block  py-2 rounded"
                href={"/"}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              Movies
              <ul className="flex flex-col gap-5 px-5">
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
                    href={"/movies/popular"}
                    onClick={() => setIsOpen(false)}
                  >
                    Populars
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
                    href={"/movies/uncoming"}
                    onClick={() => setIsOpen(false)}
                  >
                    Uncoming
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
                    href={"/movies/nowplaying"}
                    onClick={() => setIsOpen(false)}
                  >
                    Now Playing
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
                    href={"/movies/toprated"}
                    onClick={() => setIsOpen(false)}
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              Series
              <ul className="flex flex-col gap-5 px-5">
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded"
                    href={"/series/popular"}
                    onClick={() => setIsOpen(false)}
                  >
                    Populars
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded capitalize"
                    href={"/series/on-the-air"}
                    onClick={() => setIsOpen(false)}
                  >
                    On the air
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded capitalize"
                    href={"/series/top-rated"}
                    onClick={() => setIsOpen(false)}
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default SideBar;
