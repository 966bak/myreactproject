import React from "react";
import bannerImg from "../../assets/remote.png";
import bannerbg from "../../assets/buttons.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="relative h-[calc(100vh-(3.5rem))] bg-gradient-to-tr overflow-clip  from-emerald-500 from-0% via-sky-500 via-20% to-purple-500 to-90% ">
      <div className="max-w-screen-2xl mx-auto relative h-full">
        <img
          className="h-full absolute left-0 scale-150 bottom-0 opacity-5 -scale-x-150"
          src={bannerbg}
          alt="banner"
        />
        <img
          className="lg:h-full absolute hidden lg:inline object-cover -right-2 blur-md scale-50 bottom-0 mix-blend-color-dodge"
          src={bannerImg}
          alt="banner"
        />
        <img
          className="lg:h-full lg:absolute object-cover right-0 scale-50 bottom-0"
          src={bannerImg}
          alt="banner"
        />
        <div className="lg:w-3/4 max-w-screen-sm lg:absolute left-0 flex flex-col justify- items-start top-1/2 lg:-translate-y-1/2 lg:p-8 text-slate-200 ">
          <span className="text-purple-700 font-bold text-base text-center ">
            <FontAwesomeIcon icon={faGamepad} />
            <span> new arrival</span>
          </span>
          <h1 className="text-4xl capitalize font-bold border-b-4 border-b-purple-700 mb-2">
            Gaming console
          </h1>
          <p className="text-justify text-lg">
            New World Controller Charger for Xbox One,Xbox Series, Rechargeable
            Battery Pack for Xbox One, Xbox One X, Xbox One S, Xbox One Elite
            Controller,Xbox series Controller Charging Station with 2pcs 800mAh
            Rechargeable Battery With Charging Indicator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
