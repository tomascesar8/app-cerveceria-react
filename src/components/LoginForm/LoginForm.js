import { Button, Form } from 'react-bootstrap';
import './LoginForm.css'
import { styled } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { LOGIN_VALUES, URL_USERS } from '../../constanst';
import { validateLogin } from '../../helpers/validations';

export const FormContainer = styled.div`
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--platinum)
`
const LoginForm = () => {
  const navigate = useNavigate();
  
  const checkData = async()=>{
    const response = await axios.get(URL_USERS);
    const {data} = response;
    const userFound = data.find(user=>user.email === values.email);
    if (userFound) {
      if(userFound.password === values.password){
        localStorage.setItem('user', JSON.stringify(userFound));
        navigate('/products')
      }else{
        alert('CONTRASEÑA INCORRECTA')
      }
    }else{
      alert('USUARIO INCORRECTO');
    }
  }
    
  const {values, handleKeyUp, handleSubmit, errors} = useForm(LOGIN_VALUES, checkData, validateLogin)
  
  return ( 
    <FormContainer>
      <Form onSubmit={(e)=>handleSubmit(e)} className='mb-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de email</Form.Label>
          <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Ingresá tu email" name="email" required />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control onKeyUp={handleKeyUp} type="password" placeholder="Contraseña" name='password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="No soy un robot" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </FormContainer>
  );
}
 
export default LoginForm;




// import axios from 'axios';
// import { useContext, useState } from 'react';
// import {Form, Button} from 'react-bootstrap'
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     email:'',
//     password:''
//   })

//   const {setUser} = useContext(UserContext)
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = useParams();
//   console.log(location);
//   console.log(params);
//   const checkData = async ()=>{
//     const response = await axios.get('http://localhost:3500/users');
//     const {data} = response;
//     const userFound = data.find(user=>user.email === values.email);
//     console.log(userFound);
//     if(userFound){
//       if(userFound.password === values.password){
//         localStorage.setItem('user', JSON.stringify(userFound))
//         setUser(userFound)
//         navigate("/home");
//       }else{
//         alert('Credenciales incorrectas')
//       }
//     }else{
//       alert('Credenciales incorrectas')
//     }
//   }
//   const handleKeyUp = (e) =>{
//     setValues({
//       ...values,
//       [e.target.name]:e.target.value
//     })
//   }
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     checkData();
//   }
//   return (
//     <Form className='w-25' onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };
// export default LoginForm;

