import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { URL_PRODUCTS } from '../../constanst';
import useGet from '../../hooks/useGet';
import './TableProducts.css';

const TableProducts = () => {
  const initialProducts = useGet(URL_PRODUCTS);
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    // Filtrar la lista de productos para eliminar el producto con el ID especificado
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    setProducts(initialProducts); // Actualizar los productos cuando cambia initialProducts
  }, [initialProducts]);

  return (
    <>
      <div className='mt-4 text-center'>
        <button className='btn btn-primary text-white p-2 fw-bolder fs-5'>Agregar producto</button>
      </div>
      <Table striped bordered hover variant="dark" className='text-center w-75 m-auto my-5 align-center'>
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
                <button className='btn btn-success me-1'>Actualizar</button>
                <button className='btn btn-danger ms-1' onClick={() => handleDelete(product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableProducts;





// import { Table } from 'react-bootstrap';
// import { URL_PRODUCTS } from '../../constanst';
// import useGet from '../../hooks/useGet';
// import './TableProducts.css'

// const TableProducts = () => {
//   const products = useGet(URL_PRODUCTS);
  
//   const handleDelete =(id)=>{
//     const elementDelete = document.getElementById(id);
//     const containerElementDelete = elementDelete.parentElement
//     containerElementDelete.remove(elementDelete)
//   }
//   return ( 
//     <>
//       <div className='mt-4 text-center'>
//         <button className='btn btn-primary text-white p-2 fw-bolder fs-5'>Agregar producto</button>
//       </div>
//       <Table striped bordered hover variant="dark" className='text-center w-75 m-auto my-5 align-center'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Nombre</th>
//             <th>Precio</th>
//             <th>Imagen</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//         {
//   products.map((product) => (
//     <tr key={product.id} id={product.id}>
//       <td>{product.id}</td>
//       <th>{product.name}</th>
//       <td>$ {product.price}</td>
//       <td>{product.image}</td>
//       <td>
//         <button className='btn btn-success me-1'>Actualizar</button>
//         <button className='btn btn-danger ms-1' onClick={() => handleDelete(product.id)}>Borrar</button>
//       </td>
//     </tr>
//   ))
// }
//         </tbody>
//          </Table>
//     </>
//    );
// }
 
// export default TableProducts;