import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Productos from "./pages/Productos";
import ErrorPage from "./pages/ErrorPage";
import PublicRoute from "./routes/PublicRoute";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<PrivateRoute><LandingPage/></PrivateRoute>}/>
        <Route path="/login" element={<PublicRoute> <Login/> </PublicRoute>}/>
        <Route path="/products" element={<PrivateRoute><Productos/></PrivateRoute>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
