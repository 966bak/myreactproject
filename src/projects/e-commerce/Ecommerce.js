import React, { useEffect, useState, createContext } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import WishList from "./components/pages/WishList";
import { Route, Routes } from "react-router-dom";
import Setting from "./components/pages/Setting";
import CartMini from "./components/utility/CartMini";
import ProductDetail from "./components/pages/ProductDetail";
import AllProducts from "./components/pages/AllProducts";
export const EcommerceGlobalInfo = createContext();
const Ecommerce = () => {
  const [cartState, setCartState] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  //all product fetching
  const API = "https://ecommerceserver-nugf.onrender.com/products";
  const [products, setProducts] = useState([]);
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.error(
        "backend not fetch , make sure you run your backend at 8900 port.." +
          error
      );
    }
  };
  //cart fetching
  const CART_API = "https://ecommerceserver-nugf.onrender.com/cart";
  const [cartData, setCartData] = useState([]);
  const fetchCartData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setCartData(data);
      }
    } catch (error) {
      console.error(
        "backend not fetch , make sure you run your backend at 8900 port.." +
          error
      );
    }
  };

  useEffect(() => {
    fetchApiData(API);
    fetchCartData(CART_API);
  }, []);
  const handleCart = (item) => {
    setCartState(true);
    fetch("https://ecommerceserver-nugf.onrender.com/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item added to cart.");
          const updatedCartData = [...cartData, item];
          setCartData(updatedCartData);
        } else {
          console.error("Error adding item to cart.");
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };
  const handleRemove = (item) => {
    fetch(`https://ecommerceserver-nugf.onrender.com/cart/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Item removed from cart.");
          const updatedCartData = cartData.filter((cartItem) => cartItem.id !== item.id);
          setCartData(updatedCartData);
        } else {
          console.error("Error removing item from cart.");
        }
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };
    // Filter products based on search term
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="no-scrollbar h-screen overflow-auto">
      <EcommerceGlobalInfo.Provider
        value={{ products: filteredProducts, cartState: handleCart }}
      >
        <Header cartData={cartData} onSearch={setSearchTerm}  />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="cart" element={<Cart cartData={cartData} setCartData={setCartData} onRemove={handleRemove}/>} />
          <Route path="setting" element={<Setting />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="productDetail/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <CartMini state={cartState} cartState={setCartState} cartData={cartData} setCartData={setCartData}  onRemove={handleRemove} />
      </EcommerceGlobalInfo.Provider>
    </div>
  );
};

export default Ecommerce;
