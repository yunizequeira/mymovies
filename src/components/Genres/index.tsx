import Link from "next/link"

interface Props {
    genres?:{
        id:number
        name:string
    }[]
}

const Geres = ({genres}:Props) => {
  return (
    <div className="flex gap-2">
      {
        genres && genres.map(genre => <Link href={`/genre/${genre.id}-${genre.name}`} key={genre.id} className="text-slate-400/50 hover:text-slate-400 transition-colors duration-300">{genre.name}</Link>)
      }
    </div>
  )
}

export default Geres
