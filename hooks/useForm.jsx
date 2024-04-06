import  { useState } from 'react';
import { signInFailure } from '../src/redux/user/user-slice';
import { useDispatch } from 'react-redux'

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
const dispatch = useDispatch(null);
  const handleChange = (e) => {
    dispatch(signInFailure(null));

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};
