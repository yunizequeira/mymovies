'use client'
import { usePathname,useSearchParams,useRouter } from "next/navigation";
import {useState } from "react";
import { Suspense } from "react";

const WAIT_BETWEEN_CHANGE = 300
const Search = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get("search")?.toString()
    const pathname = usePathname()
    console.log(pathname)
    const router = useRouter()
    const [term,setTerm] = useState('')
    console.log(term)
    const SearchTerm = (term:string)=>{
      if(term!==''){
        router.push(`/movies?search=${term}`)
      }else{
        router.push(`/movies`)
      }
    }
  return (
    <div className="flex items-center justify-center px-3 rounded-md  w-full">
    <Suspense fallback={<div>Loading...</div>}>
    <form className="w-full flex justify-center items-center " onSubmit={()=>SearchTerm(term)}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="What are your looking for ...?"
        className=" p-3 focus:outline-none h-full w-full flex justify-center rounded-l-lg text-black text-sm font-bold"
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e)=>setTerm(e.target.value)}
      />
      <button className="py-3 px-4 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 rounded-r-lg">
        <i>search</i>
      </button>
    </form>
    </Suspense>
  </div>
  )
}

export default Search
