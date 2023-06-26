import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="font-bold text-center text-4xl border-b border-b-black py-2">
        Projects
      </h1>
      <main className="max-w-screen-2xl mx-auto">
        <div className=" grid grid-cols-4 space-x-3 my-10 ">
          <Link
            to="todo"
            className="border  col-span-1 border-black h-52 font-bold text-3xl flex justify-center items-center uppercase rounded-md hover:bg-blue-400 hover:text-slate-200 transition-colors "
          >
            todo
          </Link>
          <Link
            to="ecommerce"
            className="border  col-span-1 border-black h-52 font-bold text-3xl flex justify-center items-center uppercase rounded-md hover:bg-blue-400 hover:text-slate-200 transition-colors "
          >
            e-commerce
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
