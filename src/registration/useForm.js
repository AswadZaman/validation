import { useState, useEffect } from "react";


const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validateInfo(values))
  };
  return { handleInputChange, values, handleSubmit , errors};
};
export default useForm;
