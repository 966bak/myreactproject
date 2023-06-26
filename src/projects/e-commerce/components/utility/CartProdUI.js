import React from "react";
import {
  faHeart,
  faMinus,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartProdUI = ({ data,handleRemove }) => {
  const { title, price, brand, images } = data;
  console.log(images)
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img
            className="h-24 w-full object-contain"
            src={images[0]}
            alt="img"
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{brand}</span>
          <div className="flex gap-x-2 items-center">
            <a
              href="javascript"
              className="font-semibold hover:text-green-700 text-gray-500 text-xs"
            >
              <FontAwesomeIcon icon={faHeart} className="mr-1" />
              add to wishlist
            </a>
            <a
              href="javascript"
              className="font-semibold hover:text-yellow-800 text-gray-500 text-xs"
            >
              <FontAwesomeIcon icon={faSave} className="mr-1" />
              save for later
            </a>
            <button  
            onClick={() => handleRemove(data)}
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-1" />
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value="1"
          disabled
        />

        <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
    </div>
  );
};

export default CartProdUI;
