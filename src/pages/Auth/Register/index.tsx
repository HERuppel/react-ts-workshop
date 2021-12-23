import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Input from '../../../components/Input';
import { useStyles } from './styles';

interface SignUpProps {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const classes = useStyles();
  const formMethods = useForm<SignUpProps>();
  const { handleSubmit } = formMethods;

  const onSubmit = async (data: SignUpProps): Promise<void> => {
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.header}>
          <Typography variant='h5'>HEADER</Typography>
        </div>
        <FormProvider {...formMethods}>
          <Input name='email' label='E-mail' />
          <Input name='name' label='Nome' />
          <Input name='password' label='Senha' />
          <Input name='confirmPassword' label='Confirme a senha' />
        </FormProvider>
        <div className={classes.bottomContainer}>
          <Button className={classes.button} type='submit'>
            Cadastrar
          </Button>
          <NavLink className={classes.signIn} to='/auth/login'>
            <Typography variant='h6'>Já possuo uma conta</Typography>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
