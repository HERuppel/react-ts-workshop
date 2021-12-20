import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  required?: boolean;
  givenError?: string;
  customClass?: string;
}

const Input: React.FC<InputProps> = ({ label, name, required, givenError, customClass }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <TextField
      variant='outlined'
      label={label}
      helperText={errors[name] && givenError}
      className={customClass}
      {...register(name, { required: { value: required as boolean, message: givenError as string } })}
    />
  );
};

export default Input;
