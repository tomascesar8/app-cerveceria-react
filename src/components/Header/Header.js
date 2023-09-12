import { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { UserContext } from "../../context/UserContext";

const MyNavbar = styled(Navbar)`
padding: 20px;
background-color: var(--rich-black);
font-family: var(--title-font);
`

const Header = () => {
  const {user, setUser} = useContext(UserContext)
  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('user'));    
    if(userLogged) {
      setUser(userLogged); 
    }
  }, []);
  
  const handleClick =()=> {
    localStorage.clear();
    setUser(null)
  }
  console.log(user);
  
  return ( 
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">TOMSOM BEER 🍺</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user? 
            user.admin?   
              <Nav className="ms-auto me-5">
                <Link className="nav-link" to='/admin'>Administración</Link>
                <Link className="nav-link" to='/products'>Productos</Link>
                <Link className="nav-link" to='/courses'>Cursos de elaboración</Link>
                <Link className="nav-link" to='/login' onClick={handleClick} >Cerrar sesión</Link>
              </Nav>
              :
              <Nav className="ms-auto me-5">
              <Link className="nav-link" to='/products'>Productos</Link>
              <Link className="nav-link" to='/courses'>Cursos de elaboración</Link>
              <Link className="nav-link" to='/login' onClick={handleClick} >Cerrar sesión</Link>
            </Nav>:
          <Nav className="ms-auto me-5">
            <Link className="nav-link" to='/login'> Iniciar sesión </Link>
            <Link className="nav-link" to='/register'>Registrarse</Link>
          </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </MyNavbar>
   );
}
 
export default Header;