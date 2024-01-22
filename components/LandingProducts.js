import Link from "next/link";
import React from "react";

function LandingProducts() {
  return (
    <div className="md:flex md:justify-center">
      <div className="flex h-[30vh] w-fit my-10 justify-center">
        <Link href='/caps'>
          <div className="mx-5 hover:transform hover:translate-y-3  hover:shadow-lg ease-in-out hover:transition ">
            <img
              src="/ImagesLandingPage/asdfghjkl.webp"
              alt="caps"
              className="h-[30vh] w-fit"
            />
          </div>
        </Link>
        <Link href='/hoodies'>
          <div className="mx-5 hover:transform hover:translate-y-3  hover:shadow-lg ease-in-out hover:transition ">
            <img
              src="/ImagesLandingPage/asdfghjklqtw.webp"
              alt="hoodie"
              className="h-[30vh] w-fit"
            />
          </div>
        </Link>
      </div>
      <div className="flex h-[30vh] w-fit my-10 justify-center">
        <Link href='/tshirts'>
          <div className="mx-5 hover:transform hover:translate-y-3  hover:shadow-lg ease-in-out hover:transition ">
            <img
              src="/ImagesLandingPage/asdfghjklsd.webp"
              alt="tshirt"
              className="h-[30vh] w-fit"
            />
          </div>
        </Link>
        <Link href='/sweatshirts'>
          <div className="mx-5 hover:transform hover:translate-y-3  hover:shadow-lg ease-in-out hover:transition">
            <img
              src="/ImagesLandingPage/wfhbsdbshjd.webp"
              alt="sweatshirt"
              className="h-[30vh] w-fit"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingProducts;
