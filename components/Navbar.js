import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdLightMode, MdOutlineShoppingCart } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Navbar(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showcart, setShowcart] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [showcart]);

  const handleSearch = () => {
    router.push(`/search/${search}`, undefined, { shallow: true });
  };
  const removeCart = (id) => {
    localStorage.setItem("cart" , JSON.stringify(cart.filter(items => items._id !== id)))
    setCart(JSON.parse(localStorage.getItem("cart")));

  };
  return (
    <div className="w-full">
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
            <Link href="/login">
              <FaUser className="text-3xl mx-4" />
            </Link>
            {props.mode === "light" && (
              <MdDarkMode
                onClick={props.handleMode}
                className="text-3xl mx-4"
              />
            )}
            {props.mode === "dark" && (
              <MdLightMode
                onClick={props.handleMode}
                className="text-3xl mx-4"
              />
            )}
            <MdOutlineShoppingCart
              className="text-3xl mx-4"
              onClick={(event) => {
                !showcart ? setShowcart(true) : setShowcart(false);
              }}
            />
          </div>
        </div>
      </nav>
      {showcart && (
        <div className="h-[90vh] absolute ml-[75%] bg-gray-300 overflow-scroll overflow-x-hidden rounded">
          {cart.map((items) => (
            <div
              key={items._id}
              className="flex h-auto bg-white m-2 shadow-md my-5"
            >
              <img src={items.image} className="w-[30%]" alt={items.title} />
              <div className="mx-4">
                <p>{items.title}</p>
                <p>₹{items.price}</p>
                <button
                  className="border mr-5 p-3 hover:bg-gray-300 hover:border-blue-200 hover:border-2 mt-[25%]"
                  onClick={(event) => router.push(`/buyitem/${items._id}`)}
                >
                  Buy now
                </button>
                <button
                  className="border mr-5 p-3 hover:bg-gray-300 hover:border-blue-200 hover:border-2 mt-[25%]"
                  onClick={(event) => removeCart(items._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
