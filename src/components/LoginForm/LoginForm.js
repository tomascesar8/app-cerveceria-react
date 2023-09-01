import { Button, Form } from 'react-bootstrap';
import './LoginForm.css'
import { styled } from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--platinum)
`
const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const checkData = async()=>{
    const response = await axios.get('http://localhost:3500/users');
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
  const handleKeyUp =(e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    checkData()
  }
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




// import { Button, Form } from 'react-bootstrap';
// import './LoginForm.css'
// import { styled } from 'styled-components';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const FormContainer = styled.div`
//   height: 89vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--platinum)
// `;

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleKeyUp = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await axios.get('http://localhost:3500/users');
//     const { data } = response;
//     const userFound = data.find((user) => user.email === values.email);

//     if (userFound) {
//       if (userFound.password === values.password) {
//         localStorage.setItem('user', JSON.stringify(userFound));
//         navigate('/products');
//       } else {
//         alert('CONTRASEÑA INCORRECTA');
//       }
//     } else {
//       alert('USUARIO INCORRECTO');
//     }
//   };

//   return (
//     <FormContainer>
//       <Form onSubmit={handleSubmit} className='mb-5'>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Dirección de email</Form.Label>
//           <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Ingresá tu email" name="email" required />
//           <Form.Text className="text-muted">
//             Nunca compartiremos su correo electrónico con nadie más.
//           </Form.Text>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Contraseña</Form.Label>
//           <Form.Control onKeyUp={handleKeyUp} type="password" placeholder="Contraseña" name='password' required />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="No soy un robot" required/>
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Iniciar sesión
//         </Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default LoginForm;



