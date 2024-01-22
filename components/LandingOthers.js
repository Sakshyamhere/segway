import React from "react";
import { IoShirtSharp ,IoGiftOutline } from "react-icons/io5";

function LandingOthers() {
  return (
    <div className="flex justify-center my-10">
      <div className="border">
        <div className="p-8 shadow-md">
            <IoShirtSharp className="mx-auto text-4xl"/>
          <p className="text-center my-2  font-bold text-3xl">Great Products</p>
          <p>Our Products are 100% authentic and made in Nepal.</p>
        </div>
      </div>
      <div className="border mx-5">
        <div className="p-8 shadow-md">
            <IoGiftOutline className="mx-auto text-4xl"/>
          <p className="text-center my-2  font-bold text-3xl">Exciting Offers</p>
          <p>Great offers and deals are available in our website.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingOthers;
