import {
  faCartShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WishList = () => {
  return (
    <div className="min-h-[calc(100vh-(3.5rem))] max-w-screen-2xl mx-auto py-4 ">
      <h1 className="text-xl capitalize font-bold bg-purple-500 text-white p-2 rounded-sm">default wishlist</h1>
      <div className="flex items-center w-full justify-evenly hover:bg-gray-100  px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img
              className="h-24"
              src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Iphone 6S</span>
            <span className="text-red-500 text-xs">Apple</span>
            <div className="flex gap-x-2 items-center">
              <a
                href="javascript"
                className="font-semibold hover:text-green-700 text-gray-500 text-xs"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-1" />
                add to cart
              </a>
              <a
                href="javascript"
                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-1" />
                Remove
              </a>
            </div>
          </div>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>
    </div>
  );
};

export default WishList;
