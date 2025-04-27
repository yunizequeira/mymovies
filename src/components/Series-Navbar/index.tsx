'use client'
import Link from "next/link"
import { useState } from "react"

const SeriesNavbar = () => {
    const [show, setShow] = useState(false)
  return (
    <div className="relative" onMouseOver={() => setShow(true)}>
      <button>Series</button>
      {
        show && (
          <div className="absolute top-10 -left-10 bg-gray-900 py-10 rounded-lg z-10 flex flex-col items-center gap-2 w-32 border-4 border-blue-700 "  onMouseLeave={() => setShow(false)}>
            <Link href={'/series/popular'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={() => setShow(false)}>Populars </Link>
            <Link href={'/series/on-the-air'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={() => setShow(false)}>On The Air </Link>
            <Link href={'/series/top-rated'} className="hover:bg-blue-700 flex-nowrap inline-block px-5 py-2 rounded" onClick={() => setShow(false)}>Top Rated </Link>
            </div>  )
      }
    </div>
  )
}

export default SeriesNavbar;