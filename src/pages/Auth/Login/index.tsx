import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Input from '../../../components/Input';
import { useStyles } from './styles';

interface FormCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const formMethods = useForm<FormCredentials>();
  const { handleSubmit } = formMethods;

  const onSubmit = (data: FormCredentials) => {
    console.log(data);
  };

  return (
    <Grid container xs={12} className={classes.container}>
      <Grid className={classes.left} item xs={6}>
        <Typography variant='h2'>Bem-vindo(a) ao KRUD!</Typography>
      </Grid>
      <Grid className={classes.right} item xs={6}>
        <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <Typography className={classes.header} variant='h5'>
            Insira suas credencias
          </Typography>
          <FormProvider {...formMethods}>
            <Input name='email' label='E-mail' />
            <Input name='password' label='Senha' type='password' />
          </FormProvider>
          <div className={classes.bottomContainer}>
            <Button className={classes.button} type='submit'>
              Entrar
            </Button>
            <NavLink className={classes.signUp} to='/auth/register'>
              <Typography variant='h6'>Ainda não possui conta?</Typography>
            </NavLink>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
