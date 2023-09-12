import { useState } from "react";

const useForm = (initialValues, submit, validations) => {
  const [values, setValues] = useState(initialValues);
  const handleKeyUp =(e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }
  let errors;
  const handleSubmit =(e)=>{
    e.preventDefault();
    errors = validations(values);
    if(Object.keys(errors)===0){
    }
    submit()
  }
  return ({
    values,
    handleKeyUp,
    handleSubmit,
    errors
  }
   );
}
 
export default useForm;