import './RegisterForm.css'
import { Form, Button } from "react-bootstrap";
import { REGISTER_VALUES, URL_USERS } from "../../constanst";
import useForm from "../../hooks/useForm";
import { FormContainer } from '../LoginForm/LoginForm';
import useGet from '../../hooks/useGet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
  const navigate = useNavigate()
  const users = useGet(URL_USERS)
  const check = async()=>{
    const repeatedUser = users.find(user=>user.email===values.email)
    if(repeatedUser){
      alert('USUARIO YA REGISTRADO');
    }else{
      axios.post(URL_USERS, values)
      navigate('/login')
    }
  }
  const {values, handleKeyUp, handleSubmit} = useForm(REGISTER_VALUES, check)
  return ( 
    <FormContainer>
      <Form onSubmit={(e)=>handleSubmit(e)} className='register-form mb-5'>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control onKeyUp={handleKeyUp} type="text" placeholder="Nombre completo" name="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Dirección de email" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control onKeyUp={handleKeyUp} type="number" placeholder="Edad" name="age" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onKeyUp={handleKeyUp} type="password" placeholder="Contraseña" name='password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onKeyUp={handleKeyUp} type="password" placeholder="Repetí tu contraseña" name='repeat-password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="No soy un robot" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </FormContainer> 
  );
}
 
export default RegisterForm;