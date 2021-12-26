import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  givenError?: string;
  customClass?: string;
} & TextFieldProps;

const Input: React.FC<InputProps> = ({
  name,
  required,
  givenError,
  customClass,
  defaultValue,
  multiline,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      minRows={multiline ? 4 : 1}
      maxRows={multiline ? 6 : 1}
      defaultValue={defaultValue}
      helperText={errors[name] && givenError}
      className={customClass}
      {...register(name, { required: { value: required as boolean, message: givenError as string } })}
      {...rest}
    />
  );
};

export default Input;
