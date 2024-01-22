import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
// import { MdOutlineNightsStay } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push(`/search/${search.toLowerCase().replace(/\s+/g, '-')}`);
  };
  return (
    <div>
      <nav className="text-gray-600 border-b-2 shadow-lg w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-3xl">SegWay</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/tshirts">
              T-shirts
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/hoodies">
              Hoodies
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/sweatshirts">
              Sweatshirts
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/caps">
              Caps
            </Link>
          </nav>
          <form onSubmit={handleSearch}>
            <input
              className="inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
          </form>
          <div className="flex my-3 md:my-0">
          <Link href='/login'>
          <FaUser className="text-3xl mx-4"/>
          </Link>
          {props.mode === 'light' &&
              <MdDarkMode onClick={props.handleMode} className="text-3xl mx-4"/>

          }
            {props.mode ==='dark' && (
              <MdLightMode onClick={props.handleMode} className="text-3xl mx-4"/>
          )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
