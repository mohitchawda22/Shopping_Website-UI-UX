import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 dark:bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>CATALOGUE</a>
            </li>
            <li>
              <a>FASHION</a>
              <ul className="p-2">
                <li>
                  <a>MEN</a>
                </li>
                <li>
                  <a>WOMEN</a>
                </li>
              </ul>
            </li>
            <li>
              <a>FAVOURITE</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
            <Image src='/Vector.png' width={20} height={20} alt="logo" className="w-auto h-auto"></Image>
            <Image src='/FASHION.png' width={80} height={100} alt="logo" className="h-auto w-auto"></Image>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-black font-semibold">CATALOGUE</a>
          </li>
          <li>
              <a className="text-black font-semibold">FASHION</a>
          </li>
          <li>
            <a className="text-black font-semibold">FAVOURITE</a>
          </li>
          <li>
            <a className="text-black font-semibold">LIFESTYLE</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-black text-white mr-5" href="/SignUp">SIGN UP</a>
      </div>
    </div>
  );
}

export default Navbar;
