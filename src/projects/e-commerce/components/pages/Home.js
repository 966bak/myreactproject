import React from "react";
import Banner from "../utility/Banner";
import RecentProd from "../utility/RecentProd";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className=" max-w-screen-2xl mx-auto ">
        <RecentProd />
        <h1 className="capitalize font-semibold text-lg text-purple-800 mt-2">
          Today's top deal
        </h1>
        <AllProducts />
      </div>
    </div>
  );
};

export default Home;
