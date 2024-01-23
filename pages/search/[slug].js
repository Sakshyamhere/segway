import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchSlug() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductwithSearch();
  }, [router.query.slug]);
  const fetchProductwithSearch = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/fetchProductwithQuery?search=${router.query.slug}`
    );
    const data = await response.data.product;
    setProducts(data);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((items) => (
          <div
            className="relative flex flex-col text-gray-700 mx-auto bg-white shadow-md bg-clip-border rounded-xl w-[350px] m-3"
            onClick={(event) => router.push(`/product/${items._id}`)}
            key={items._id}
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img
                src={items.image}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {items.title}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 px-4">
                  ₹{items.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
