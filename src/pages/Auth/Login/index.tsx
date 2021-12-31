import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const Login = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.left} item xs={6}>
        <Typography style={{ color: '#FFF' }} variant='h2'>
          Bem-vindo(a) ao KRUD!
        </Typography>
      </Grid>
      <Grid className={classes.right} item xs={6}>
        <form className={classes.formContainer}>
          <Typography color='secondary' className={classes.header} variant='h5'>
            Insira suas credenciais
          </Typography>
          {/* to do form */}
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
