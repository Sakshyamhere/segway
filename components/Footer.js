import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer class="text-gray-600 body-font bg-gray-200">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span class="ml-3 text-xl">Segway</span>
            </Link>
            <p class="mt-2 text-sm text-gray-500">
              Place to buy 100% authentic made in Nepal product.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link className="mr-5 hover:text-gray-900" href="/tshirts">
                    T-shirts
                  </Link>
                </li>
                <li>
                  <Link className="mr-5 hover:text-gray-900" href="/hoodies">
                    Hoodies
                  </Link>
                </li>
                <li>
                  <Link
                    className="mr-5 hover:text-gray-900"
                    href="/sweatshirts"
                  >
                    Sweatshirts
                  </Link>
                </li>
                <li>
                  <Link className="mr-5 hover:text-gray-900" href="/caps">
                    Caps
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Sakshyamhere
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                class="text-gray-500"
                href="https://github.com/Sakshyamhere"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/sakshyam-aryal-587603262/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
