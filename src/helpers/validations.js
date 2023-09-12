export const validateLogin = (values)=>{
  let errors = {}
  if(!values.email){
    errors.email='EMAIL VACÍO'
  }else if(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(values.email)){
    errors.email='EL EMAIL NO ESTÁ ESCRITO CORRECTAMENTE'
  }
  if (!values.password) {
    errors.password = 'NO SE PUEDE DEJAR VACIA LA CONTRASEÑA'    
  }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(values.password)){
    errors.password = 'LA CONTRASEÑA NO ESTÁ ESCRITA CORRECTAMENTE'
  }
  return errors
}