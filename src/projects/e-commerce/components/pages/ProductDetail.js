import {
  faHeart,
  faShareAlt,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { EcommerceGlobalInfo } from "../../Ecommerce";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
library.add(fab);

const ProductDetail = () => {
  const { id } = useParams();
  const { products,cartState } = useContext(EcommerceGlobalInfo);
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (products) {
      const foundItem = products.find((x) => Number(x.id) === Number(id));
      setItem(foundItem);
      const visitedProducts = localStorage.getItem("visitedProducts");
      let updatedVisitedProducts = [];
      if (visitedProducts) {
        updatedVisitedProducts = JSON.parse(visitedProducts);

        const existingProductIndex = updatedVisitedProducts.findIndex(
          (product) => product.id === foundItem.id
        );

        if (existingProductIndex !== -1) {
          updatedVisitedProducts.splice(existingProductIndex, 1);
        }
      }
      updatedVisitedProducts.unshift(foundItem);
      localStorage.setItem(
        "visitedProducts",
        JSON.stringify(updatedVisitedProducts)
      );
    }
  }, [products, id]);
  const { title, brand, description, price, rating, images } = item || {};
  return (
    <>
      {item ? (
        <div>
          <section className="py-6 sm:py-20">
            <div className="container px-4 mx-auto">
              <div className="max-w-xl lg:max-w-6xl mx-auto">
                <div className="flex flex-wrap -mx-4 mb-12">
                  <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="lg:w-112">
                      <div className="relative block mb-6 h-48 sm:h-96 w-full bg-blueGray-900 ">
                        <div className="absolute top-0 left-0 h-full w-full ">
                          <img
                            className="img-fluid w-full h-full object-contain  border border-slate-800"
                            src={images[0]}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -ml-3 -mb-3 justify-between">
                        <div className="w-fit h-fit px-3 mb-3 cursor-pointer">
                          <div className="relative group block w-fit h-fit bg-blueGray-900 rounded-m">
                            <div className="h-fit w-fit transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                              <img
                                className=" w-28 h-28 object-contain  border border-black"
                                src={images[1]}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-fit h-fit px-3 mb-3 cursor-pointer">
                          <div className="relative group block w-fit h-fit bg-blueGray-900 rounded-m">
                            <div className="h-fit w-fit transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                              <img
                                className=" w-28 h-28 object-contain  border border-black"
                                src={images[2]}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-fit h-fit px-3 mb-3 cursor-pointer">
                          <div className="relative group block w-fit h-fit bg-blueGray-900 rounded-m">
                            <div className="h-fit w-fit transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                              <img
                                className=" w-28 h-28 object-contain  border border-black"
                                src={images[3]}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-fit h-fit px-3 mb-3 cursor-pointer">
                          <div className="relative group block w-fit h-fit bg-blueGray-900 rounded-m">
                            <div className="h-fit w-fit transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                              <img
                                className=" w-28 h-28 object-contain  border border-black"
                                src={images[4]}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="max-w-lg">
                      <h2 className="text-4xl font-black mb-1">{title}</h2>
                      <span className="block text-sm font-bold mb-5">
                        {brand}
                      </span>
                      <div className="flex items-center mb-4 cursor-pointer text-purple-800">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <span>{rating}</span>
                      </div>
                      <span className="block text-2xl font-black text-purple-800 mb-4">
                        ${price}
                      </span>
                      <p className="font-bold mb-2">{description}</p>

                      <div className="flex flex-wrap mb-4">
                        <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                          <span className="block text-sm font-black mb-2">
                            Quantity
                          </span>
                          <div className="flex h-12 w-24 px-2 items-center justify-between border border-black ">
                            <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-purple-500 rounded transition duration-100">
                              <div className="h-px mx-px w-full bg-white"></div>
                            </button>
                            <input
                              className="w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
                              type="number"
                              placeholder="2"
                            />
                            <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-purple-500 rounded transition duration-100">
                              <div className="relative h-full w-full py-px">
                                <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                                <div className="inline-block max-w-max mx-auto h-full bg-white">
                                  <div className="inline-block px-px"></div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="w-full sm:w-auto">
                          <span className="block text-sm font-black mb-2">
                            Size
                          </span>
                          <div className="group relative h-12 w-32 border border-black  overflow-hidden">
                            <select
                              className="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
                              name=""
                              id=""
                            >
                              <option value="1">Small</option>
                              <option value="1">Medium</option>
                              <option value="1">Large</option>
                            </select>
                            <span className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-purple-500">
                              <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6">
                        <div className="flex-grow-1 w-full px-2 mb-4">
                          <div
                              onClick={() => {
                                cartState(item);
                              }}
                            className="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 "
                          >
                            <div className="transform -translate-y-1 -translate-x-1 w-full h-full ">
                              <div className="flex h-full w-full items-center justify-center bg-purple-500 hover:bg-purple-800 hover:text-slate-200  transition duration-200">
                                <span className="text-base font-black">
                                  Add to Cart
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-auto px-2 mb-4">
                          <a
                            className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-purple-500 border border-black hover:border-purple-500  transition duration-200"
                            href="k"
                          >
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="h-6 w-6"
                            />
                          </a>
                        </div>
                        <div className="w-auto px-2 mb-4">
                          <a
                            className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-purple-500 border border-black hover:border-purple-500  transition duration-200"
                            href="k"
                          >
                            <FontAwesomeIcon
                              icon={faShareAlt}
                              className="h-6 w-6"
                            />
                          </a>
                        </div>
                      </div>
                      <span className="block text-sm font-black mb-2">
                        Share on Social Media
                      </span>
                      <div>
                        <a
                          className="inline-block text-purple-500 hover:text-purple-500 mr-6"
                          href="k"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "facebook-f"]}
                            className="h-4 w-4 hover:scale-125 transition duration-200"
                          />
                        </a>
                        <a
                          className="inline-block text-purple-500 hover:text-purple-500 mr-6"
                          href="k"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            className="h-4 w-4 hover:scale-125 transition duration-200"
                          />
                        </a>
                        <a
                          className="inline-block text-purple-500 hover:text-purple-500 mr-6"
                          href="k"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "instagram"]}
                            className="h-4 w-4 hover:scale-125 transition duration-200"
                          />
                        </a>
                        <a
                          className="inline-block text-purple-500 hover:text-purple-500"
                          href="k"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "linkedin"]}
                            className="h-4 w-4 hover:scale-125 transition duration-200"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 border-b-2 border-black">
                  <div className="flex flex-col md:flex-row -mb-px">
                    <a
                      className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-black text-purple-500 border-b-4 border-purple-500"
                      href="k"
                    >
                      Description
                    </a>
                    <a
                      className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-bold text-black"
                      href="k"
                    >
                      Customer Reviews
                    </a>
                    <a
                      className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-bold text-black"
                      href="k"
                    >
                      Shipping &amp; Returns
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-black mb-3">
                    Lorem ipsum dolor sit amet
                  </h4>
                  <p className="text-lg font-bold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>Item not found</div>
      )}
    </>
  );
};

export default ProductDetail;
