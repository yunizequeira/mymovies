import Link from 'next/link'
import React from 'react'
import {IconPlayerPlay} from '@tabler/icons-react'

const WatchTrailer = ({video}: {video: string}) => {
  return (
    <Link href={`?watch=${video}`} className='hover:text-slate-400/50 transition-colors duration-300 rounded-full  inline-block border border-green-400'>
      <div className="cursor-pointer flex items-center justify-center gap-2  px-4 py-2 ">
        <IconPlayerPlay />
        <p className="">Play Trailer</p>
      </div>
    </Link>
  )
}

export default WatchTrailer
