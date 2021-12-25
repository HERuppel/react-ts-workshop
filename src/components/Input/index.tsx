import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  required?: boolean;
  givenError?: string;
  customClass?: string;
  type?: string;
  defaultValue?: string;
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  required,
  givenError,
  customClass,
  type,
  defaultValue,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      variant='outlined'
      type={type}
      label={label}
      multiline={multiline}
      minRows={multiline ? 4 : 1}
      maxRows={multiline ? 6 : 1}
      defaultValue={defaultValue}
      helperText={errors[name] && givenError}
      className={customClass}
      {...register(name, { required: { value: required as boolean, message: givenError as string } })}
    />
  );
};

export default Input;
