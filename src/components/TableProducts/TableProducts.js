import { Table } from "react-bootstrap";
import "./TableProducts.css";
import { useContext, useEffect, useState } from "react";
import ProductsContext2 from "../../context/products/ProductsContext2";
import AddProductModal from "../AddProductModal/AddProductModal";

const TableProducts = () => {
  const {
    products,
    getProducts,
    handleDelete,
    newProductAdded,
    setNewProductAdded, // Agrega la función para actualizar el nuevo estado
  } = useContext(ProductsContext2);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const handleCloseAddProduct = () => setShowAddProduct(false);
  const handleShowAddProduct = () => setShowAddProduct(true);

  useEffect(() => {
      getProducts();
  }, []);
  useEffect(() => {
    if (newProductAdded) {
      getProducts();
      setNewProductAdded(false); // Establece newProductAdded en false después de cargar los productos
    }
  }, [newProductAdded]);

  return (
    <>
      <div className="mt-4 text-center">
        <button
          onClick={handleShowAddProduct}
          className="btn btn-info text-dark border border-3 border-dark p-2 fw-bolder fs-5"
        >
          Agregar producto
        </button>
      </div>
      {products.length > 0 && (
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="text-center w-75 m-auto my-5 align-center"
        >
           <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} id={product.id}>
                <td>{product.id}</td>
                <th>{product.name}</th>
                <td>$ {product.price}</td>
                <td>{product.image}</td>
                <td>
                  <button className="btn btn-primary me-1">Actualizar</button>
                  <button
                    className="btn btn-danger ms-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <AddProductModal
        show={showAddProduct}
        handleClose={handleCloseAddProduct}
      />
    </>
  );
};

export default TableProducts;