import {
  faAngleDown,
  faBank,
  faBell,
  faExchange,
  faHeadset,
  faHourglass2,
  faLocationPinLock,
  faMoneyBillTransfer,
  faSignOut,
  faThumbsUp,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Setting = () => {
  return (
    <div className="min-h-[calc(100vh-(3.5rem))] ">
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">calvin Simmons</span>
                <span className="text-sm text-gray-600">uk</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
              </button>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <FontAwesomeIcon icon={faSignOut} className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
              <h2 className="text-gray-600 ml-0.5">
                This is your consumer Dashboard switch to seller to see
                professional Dashboard.
              </h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <button className=" capitalize ainline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                <FontAwesomeIcon icon={faExchange} className=" mr-2 " />
                Switch to seller
              </button>
            </div>
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <FontAwesomeIcon icon={faTruckArrowRight} className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">62</span>
                <span className="block text-gray-500">Total Orders</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  className="h-6 w-6"
                />
              </div>
              <div>
                <span className="block text-2xl font-bold">100$</span>
                <span className="block text-gray-500">Cash back</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                <FontAwesomeIcon icon={faLocationPinLock} className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block text-2xl font-bold">london</span>
                <span className="inline-block text-xl text-gray-500 font-semibold">
                  (uk)
                </span>
                <span className="block text-gray-500">Current Address</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <FontAwesomeIcon icon={faBank} className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">Net banking</span>
                <span className="block text-gray-500">Payment</span>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                All Available Coupon !
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  No Coupon Available
                </div>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                <FontAwesomeIcon icon={faHourglass2} className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">0</span>
                <span className="block text-gray-500">Pending Request</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                <FontAwesomeIcon icon={faHeadset} className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold">24 hour</span>
                <span className="block text-gray-500">customer support</span>
              </div>
            </div>
            <div className="row-span-3 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                <span>Your top reviews</span>
                <button
                  type="button"
                  className="inline-flex justify-center flex-nowrap items-center gap-1 text-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Descending
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: " 24rem " }}>
                <ul className="p-6 space-y-6">
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="shoes"
                      />
                    </div>
                    <span className="text-gray-600">Nike m-404 shoes</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      90
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="headphone"
                      />
                    </div>
                    <span className="text-gray-600">sony 203-h headphone</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      1k
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        alt="shirt"
                      />
                    </div>
                    <span className="text-gray-600">levis shirt</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      20
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="shoes"
                      />
                    </div>
                    <span className="text-gray-600">Nike m-404 shoes</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      90
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="headphone"
                      />
                    </div>
                    <span className="text-gray-600">sony 203-h headphone</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      1k
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        alt="shirt"
                      />
                    </div>
                    <span className="text-gray-600">levis shirt</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      20
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="shoes"
                      />
                    </div>
                    <span className="text-gray-600">Nike m-404 shoes</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      90
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="headphone"
                      />
                    </div>
                    <span className="text-gray-600">sony 203-h headphone</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      1k
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        alt="shirt"
                      />
                    </div>
                    <span className="text-gray-600">levis shirt</span>
                    <span className="ml-auto font-semibold flex flex-nowrap items-center">
                      20
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="ml-1 text-purple-500"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Offer just for you !
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  No offers
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Setting;
