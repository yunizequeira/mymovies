import Link from "next/link";
import Search from "../Search";
import Image from "next/image";
import { Suspense } from 'react'

const Navbar = () => {
  return (
    <div className="p-5 shadow-xl ">
      <div className="grid grid-cols-8 py-2">
        <div className="col-span-2 flex justify-center h-full items-center">
           <Link href={"/"} className="overflow-hidden">
          <Image
            src="/logo.jpg"
            width={200}
            height={200}
            alt="logo"
            className="rounded-full h-20 w-20"
          />
        </Link>
        </div>
       
        <div className="col-span-4 w-full flex justify-center h-full items-center">
        <Suspense>
          <Search />
        </Suspense>
        </div>
        
        <div className="flex space-x-5 col-span-2 justify-center h-full items-center">
          <Link href={"/"} className=" overflow-hidden">
            home
          </Link>
          <Link href={"/"} className=" overflow-hidden">
            home
          </Link>
          <Link href={"/"} className=" overflow-hidden">
            home
          </Link>
          <Link href={"/"} className=" overflow-hidden">
            home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
