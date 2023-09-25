import { useReducer, useState } from "react";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";
import { URL_PRODUCTS } from "../../constanst";
import {
  DELETE_PRODUCT,
  ERROR_GET_PRODUCTS,
  GET_PRODUCTS,
  ERROR_DELETE_PRODUCT,
  ADD_PRODUCT,
  ERROR_ADD_PRODUCT,
  SET_NEW_PRODUCT_ADDED,
} from "../../types";
import ProductsContext2 from "./ProductsContext2";

const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
    errorProducts: "",
  };
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  const [newProductAdded, setNewProductAdded] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(URL_PRODUCTS);
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_GET_PRODUCTS,
      });
    }
  }

  const addProduct = async (data) => {
    try {
      console.log(data);
      await axios.post(URL_PRODUCTS, data);
      dispatch({
        type: ADD_PRODUCT,
        payload: data,
      });
      dispatch({
        type: SET_NEW_PRODUCT_ADDED,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ADD_PRODUCT,
      });
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL_PRODUCTS}/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ERROR_DELETE_PRODUCT,
      });
    }
  }

  return (
    <ProductsContext2.Provider
      value={{
        products: state.products,
        errorProducts: state.errorProducts,
        getProducts,
        handleDelete,
        addProduct,
        newProductAdded,
        setNewProductAdded,
      }}
    >
      {children}
    </ProductsContext2.Provider>
  );
}

export default ProductsState;