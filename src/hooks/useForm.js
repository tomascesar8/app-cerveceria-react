import { useState } from "react";

const useForm = (initialValues, submit ) => {
  const [values, setValues] = useState(initialValues);
  const handleKeyUp =(e)=>{
    console.log('KEY UP');
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit =(e)=>{
    console.log('SUBMIT');
    e.preventDefault();
    submit() 
  }
  return ({
    values,
    handleKeyUp,
    handleSubmit  }
   );
}
 
export default useForm;