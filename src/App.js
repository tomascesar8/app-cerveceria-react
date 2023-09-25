import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Productos from "./pages/Productos";
import ErrorPage from "./pages/ErrorPage";
import PublicRoute from "./routes/PublicRoute";
import UserProvider from "./context/UserContext";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AdminRoute from "./routes/AdminRoute";
import ProductsState from "./context/products/ProductsState";
// import ProductsProvider from "./context/ProductsContext";


function App() {
  return (
    <Router>
      <UserProvider>
        {/* <ProductsProvider> */}
        <ProductsState>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<PublicRoute> <Login/> </PublicRoute>}/>
            <Route path="/register" element={<PublicRoute> <Register/> </PublicRoute>}/>
            <Route path="/products" element={<PrivateRoute><Productos/></PrivateRoute>}/>
            <Route path="/products/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>}/>
            <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </ProductsState>
        {/* </ProductsProvider> */}
      </UserProvider>
    </Router>
  );
}

export default App;
