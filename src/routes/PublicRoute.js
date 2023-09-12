import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
  //saber si está logueado o no
  const user = JSON.parse(localStorage.getItem('user'));
  return ( 
    user? <Navigate to='/'/> : children
   );
}
 
export default PublicRoute;