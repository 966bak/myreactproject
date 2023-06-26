import { useContext } from "react";
import Product from "../utility/Product";
import { EcommerceGlobalInfo } from "../../Ecommerce";

const AllProducts = () => {
  const { products } = useContext(EcommerceGlobalInfo);
  return (
    <div className="grid gap-x-2 2xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
      {products?.map((prod) => {
        return <Product key={prod.id} data={prod} />;
      })}
    </div>
  );
};

export default AllProducts;
