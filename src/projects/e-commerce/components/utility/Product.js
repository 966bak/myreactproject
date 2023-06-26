import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { EcommerceGlobalInfo } from "../../Ecommerce";
const Product = ({ data }) => {
  const { id, title, price, discountPercentage, rating, images } = data;
  const { cartState } = useContext(EcommerceGlobalInfo);
  return (
    <div className="relative flex w-full lg:max-w-[340px] my-2 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        to={`productDetail/${id}`}
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="object-cover hover:scale-110 transition-transform mx-auto"
          src={images[0]}
          alt="product"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discountPercentage}% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">$1699</span>
          </p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-purple-500" />
            <FontAwesomeIcon icon={faStar} className="text-purple-500" />
            <FontAwesomeIcon icon={faStar} className="text-purple-500" />
            <FontAwesomeIcon icon={faStar} className="text-purple-500" />
            <FontAwesomeIcon icon={faStar} className="text-purple-500" />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            cartState(data);
          }}
          className="flex gap-x-2 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
