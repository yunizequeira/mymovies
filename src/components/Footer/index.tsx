import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <div className='flex items-center '>
            <p>Powered By</p>
        <Link href={'https://www.themoviedb.org/'} target='_blank'>
        <Image src={'/logo.svg'} width={100} height={100} alt={'tmdb'} />
        </Link>
        </div>
        <div>
            <Link href={'https://profile-liard-xi.vercel.app/'} target='_blank' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl'>Yunior Zequeira Moreno</Link>
        </div>
        
    </div>
  )
}

export default Footer
