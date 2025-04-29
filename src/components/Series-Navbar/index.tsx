'use client'
import { IconChevronCompactUp } from "@tabler/icons-react"
import Link from "next/link"
import {motion} from 'framer-motion'

const SeriesNavbar =  ({ show, setShow }: { show: {category: string; value: boolean }; setShow: React.Dispatch<React.SetStateAction<{ category: string; value: boolean }>> })=> {
  const hanndleHover = () => {
    setShow({ category: "series", value: true });
  };

  const hanndleHoverLeave = () => {
    setShow({ category: "", value: false });
  };
  return (
    <div className="relative cursor-pointer" onMouseOver={hanndleHover} onMouseLeave={hanndleHoverLeave}>
    <div className="group px-5 py-2 rounded flex items-center gap-1">
      <button
    >
      Series
    </button>
    <IconChevronCompactUp className={show.category === "series" ? "w-4 h-4 transition-transform duration-200" :  "w-4 h-4 rotate-180"} />
    </div>
    
    {show.category === "series" && (
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
      <Link href={'/series/popular'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={hanndleHoverLeave}>Populars </Link>
      <Link href={'/series/on-the-air'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={hanndleHoverLeave}>On The Air </Link>
      <Link href={'/series/top-rated'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={hanndleHoverLeave}>Top Rated </Link>
      </motion.div>
    )}
  </div>
  )
}

export default SeriesNavbar;
