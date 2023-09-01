import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const MyNavbar = styled(Navbar)`
padding: 20px;
background-color: var(--rich-black);
font-family: var(--title-font);
`

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  console.log('CARGA HEADER');

  // useEffect(() => {
  //   const userLogged = ;
  //   console.log('USEEFFECT HEADER');
  //   if(userLogged) {
  //     setUser(userLogged);  
  //   }
  // }, []);

  const handleClick =()=> {
    localStorage.clear();
  }

  return ( 
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">TOMSOM BEER 🍺</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user? 
          <Nav className="ms-auto me-5">
            <Link className="nav-link" to='/products'>Productos</Link>
            <Link className="nav-link" to='/courses'>Cursos de elaboración</Link>
            <Link className="nav-link" to='/login' onClick={handleClick} >Cerrar sesión</Link>
          </Nav>
          :
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