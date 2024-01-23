import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductSlug() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductwithId();
  }, [router.query.id]);
  const fetchProductwithId = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/fetchProductwithId?id=${router.query.id}`
    );
    const data = await response.data.product;
    setProducts(data[0]);
  };

  const handleAddtoCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || []
  
    if (existingCart === null) {
      localStorage.setItem("cart", JSON.stringify([products]));
    } else {
      existingCart.push(products);
      localStorage.setItem("cart", JSON.stringify(existingCart));
    }
  };
  
  
  return (
    <div className="my-10 flex">
      <div className="flex justify-center w-[70%] mx-[300px]">
        <div className="flex items-center">
          <img
            src={products.image}
            className="object-fit h-[250px] w-[620px]"
            alt="image"
          />
        </div>
        <div className="flex flex-col justify-center m-10">
          <span>
            <p className="text-3xl font-bold">{products.title}</p>
          </span>
          <span>
            <p className="mt-10">{products.body}</p>
            <p className="mt-5 font-bold">₹{products.price}</p>
          </span>
          <div className="my-10">
            <button
              className="border mr-5 p-3 hover:bg-gray-300 hover:border-blue-200 hover:border-2"
              onClick={(event) => router.push(`/buyitem/${products._id}`)}
            >
              Buy now
            </button>
            <button
              className="border ml-5 p-3 hover:bg-gray-300 hover:border-blue-200 hover:border-2"
              onClick={handleAddtoCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
