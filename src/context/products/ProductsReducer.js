import { ADD_PRODUCT, DELETE_PRODUCT, ERROR_GET_PRODUCTS, GET_PRODUCTS, ERROR_DELETE_PRODUCT, ERROR_ADD_PRODUCT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case ERROR_GET_PRODUCTS:
      return {
        ...state,
        errorProducts: 'Hubo un error'
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case ERROR_DELETE_PRODUCT:
      return {
        ...state,
        errorProducts: 'ERROR AL ELIMINAR PRODUCTO'
      }
    case ERROR_ADD_PRODUCT:
      return {
        ...state,
        errorProducts: 'ERROR AL AGREGAR PRODUCTO'
      }
    case "SET_NEW_PRODUCT_ADDED": // Agrega el caso para SET_NEW_PRODUCT_ADDED
      return {
        ...state,
        newProductAdded: action.payload
      }
    default:
      return state;
  }
}