import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
  //saber si está logueado o no
  const user = JSON.parse(localStorage.getItem('user'));
  return ( 
    user? user.admin? children : <Navigate to='/'></Navigate> : <Navigate to='/login'></Navigate>
   );
}
 
export default AdminRoute;