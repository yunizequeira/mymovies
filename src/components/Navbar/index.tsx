'use client'
import Link from "next/link";
import Search from "../Search";
import { Suspense } from "react";
import MenuNavbar from "../Movies-Navbar";
import SeriesNavbar from "../Series-Navbar";
import SideBar from "../SideBar";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState({category: "", value: false});
  return (
    <div className="px-5 shadow-md z-50 h-20 bg-slate-900/50 backdrop-blur-lg fixed top-0 left-0 right-0 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 container mx-auto items-center h-full w-full">
        <div className="w-full h-full" >
          <Link href={"/"} className="overflow-hidden h-full flex items-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              My <span className="text-red-600">Movies</span>
            </h1>
          </Link>
        </div>
        <div className="flex justify-end items-center w-full h-full lg:hidden">
          <SideBar />
        </div>
        <div className="hidden  w-full lg:flex justify-center h-full items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        </div>

        <div className="hidden lg:flex lg:flex-row space-x-5 w-full h-full items-center justify-end flex-col ">
          <Link href={"/"} className="hover:text-blue-700">
            Home
          </Link>
          <MenuNavbar show={show} setShow={setShow}/>
          <SeriesNavbar show={show} setShow={setShow}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
