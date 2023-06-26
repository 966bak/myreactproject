import {
  faBars,
  faCartShopping,
  faGear,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartData, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = () => {
    onSearch(searchQuery);

    navigate({ pathname: `products`, search: `?search=${searchQuery}` });
    setSearchQuery("");
  };
  return (
    <div className=" bg-slate-800 text-slate-200 ">
      <div className="h-14 w-full max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link to="" className=" ">
          <img alt="Logo" src={logo} className="h-6 w-6" />
        </Link>
        <div className="hidden sm:flex text-black">
          <input
            className=" w-64 outline-none p-1 rounded-l-md"
            placeholder="search here.."
            value={searchQuery}
            onChange={handleChange}
            required
          />
          <button
            onClick={handleSearch}
            className="bg-purple-500 w-10 rounded-r-md hover:bg-purple-700 hover:text-slate-200 transition-colors"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
          <div className="hidden sm:flex gap-4">
            <Link
              to="wishlist"
              className="text-xl font-semibold capitalize hover:text-purple-500 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link
              to="setting"
              className="text-xl font-semibold capitalize hover:text-purple-500 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faGear} />
            </Link>
            <Link
              to="cart"
              className=" relative text-xl font-semibold capitalize group transition-colors cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="group-hover:text-purple-500 transition-colors"
              />
              <span className="absolute -top-1.5 -right-1 bg-purple-500 group-hover:text-purple-500 group-hover:bg-slate-200 rounded-full h-4 flex justify-center items-center text-xs p-1 transition-colors">
                {cartData.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
