import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const RecentProd = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const visitedProducts = localStorage.getItem("visitedProducts");
    if (visitedProducts) {
      setRecentProducts(JSON.parse(visitedProducts));
    }
  }, []);
  return (
    <>
      {recentProducts.length > 0 ? (
        <h1 className="capitalize font-semibold text-lg text-purple-800 mt-2">
          recently viewed!
        </h1>
      ) : (
        <></>
      )}
      <div className="flex flex-nowrap gap-x-2 w-full overflow-x-auto no-scrollbar">
        {recentProducts.map((prod) => {
          const { id, thumbnail, title, price } = prod;
          return (
            <Link
              key={id}
              to={`productDetail/${id}`}
              className="relative shrink-0 flex max-w-[280px] my-2 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <div className="relative mx-3 mt-3 flex h-32 overflow-hidden rounded-xl">
                <img
                  className="object-cover mx-auto"
                  src={thumbnail}
                  alt="product"
                />
              </div>
              <div className=" p-4">
                <div>
                  <h5 className="text-lg tracking-tight text-slate-900">
                    {title}{" "}
                  </h5>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p>
                    <span className="text-xl font-bold text-slate-900">
                      ${price}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecentProd;
