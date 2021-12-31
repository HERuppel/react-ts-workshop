import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const Register = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.formContainer}>
        <div className={classes.header}>
          <Typography color='secondary' variant='h5'>
            Insira suas informações para o registro
          </Typography>
        </div>
        {/* to do form*/}
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
