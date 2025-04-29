"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState, Suspense } from 'react';

const WAIT_BETWEEN_CHANGE = 300;
const Search = ({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toString();
  const router = useRouter();
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (search !== undefined) {
      setTerm(search);
    } else {
      setTerm("");
    }
  }, [search]);

  const SearchTerm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term !== "") {
      router.push(`/search?search=${term}`);
      setIsOpen(false);
    } else {
      router.push(`/`);
      setIsOpen(false);
    }
  };
  return (
    <div className=" rounded-md w-full">
        <Suspense>
      <form
        className="w-full flex justify-center items-center bg-white rounded-lg shadow-md "
        onSubmit={SearchTerm}
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a movie, tv show, person......"
          className=" focus:outline-none h-full w-full flex justify-center rounded-l-lg text-black text-sm font-bold px-2"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          type="submit"
          className="py-1 px-2 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-700 rounded-r-lg"
        >
          <i>search</i>
        </button>
      </form>
      </Suspense>
    </div>
  );
};

export default Search;