import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  //saber si está logueado o no
  const user = JSON.parse(localStorage.getItem('user'));
  return ( 
    user? children : <Navigate to='/login'></Navigate>
   );
}
 
export default PrivateRoute;