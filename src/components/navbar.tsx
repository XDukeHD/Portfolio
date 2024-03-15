import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-black from-white to-black text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a className="text-xl font-bold" href="#page-top">
          xDuke
        </a>
        <button
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
        <div className="hidden lg:flex items-center space-x-6" id="navbarResponsive">
          <ul className="flex space-x-6">
            <li className="text-lg font-semibold">
              <a href="#portfolio">Projects</a>
            </li>
            <li className="text-lg font-semibold">
              <a href="#about">About</a>
            </li>
            <li className="text-lg font-semibold">
              <a href="/bio">Links</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
