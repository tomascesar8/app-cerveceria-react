import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { URL_PRODUCTS } from "../constanst";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleDelete = async(id)=>{
    await axios.delete(`${URL_PRODUCTS}/${id}`)
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL_PRODUCTS);
        setProducts(response.data);
      } catch (error) {
        console.error("Error al traer los productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, handleDelete }}>
      {children}
    </ProductsContext.Provider>
  );
};


export default ProductsProvider;