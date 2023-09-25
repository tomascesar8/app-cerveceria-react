import Header from "../components/Header/Header";
import TableProducts from "../components/TableProducts/TableProducts";
import ProductsProvider from "../context/ProductsContext";

const Admin = () => {
  return ( 
    <>
      <Header/>
      <div className="text-center m-auto mt-5">
        <h1 className="text-secondary fw-bolder">TABLA DE ADMINISTRACIÓN</h1>
      </div>
      <TableProducts/>
    </>
   );
}
 
export default Admin;