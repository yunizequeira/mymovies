import Link from "next/link";
import Search from "../Search";
import Image from "next/image";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className="px-5 shadow-2xl shadow-slate-500 z-50">
      <div className="grid lg:grid-cols-8 gap-3 py-2">
        <div className="col-span-2 flex justify-center h-full items-center">
          <Link href={"/"} className="overflow-hidden">
            <Image
              src="/logo.jpg"
              width={200}
              height={200}
              alt="logo"
              className="rounded-full h-20 w-20"
              priority
            />
          </Link>
        </div>

        <div className="col-span-4 w-full flex justify-center h-full items-center">
          <Search />
        </div>

        <div className="lg:flex space-x-5 col-span-2 justify-center h-full items-center hidden ">
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
