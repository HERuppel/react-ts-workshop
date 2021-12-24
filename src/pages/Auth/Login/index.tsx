import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import { useStyles } from './styles';
import { showAlert } from '.././../../utils/showAlert';
import { useAuth } from '../../../hooks/Auth';
import Loading from '../../../components/Loading';

interface FormCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const formMethods = useForm<FormCredentials>();
  const { handleSubmit } = formMethods;
  const [loading, setLoading] = useState<boolean>(true);

  const onSubmit = async (data: FormCredentials): Promise<void> => {
    try {
      setLoading(true);
      signIn(data);
      navigate('/home/posts');
    } catch (err) {
      showAlert({
        title: 'Ops...',
        text: 'Ocorreu um problema no login',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container xs={12} className={classes.container}>
      <Grid className={classes.left} item xs={6}>
        <Typography style={{ color: '#FFF' }} variant='h2'>
          Bem-vindo(a) ao KRUD!
        </Typography>
      </Grid>
      <Grid className={classes.right} item xs={6}>
        <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <Typography color='secondary' className={classes.header} variant='h5'>
            Insira suas credenciais
          </Typography>
          <FormProvider {...formMethods}>
            <Input name='email' label='E-mail' />
            <Input name='password' label='Senha' type='password' />
          </FormProvider>
          <div className={classes.bottomContainer}>
            <Button className={classes.button} type='submit'>
              {loading ? <Loading loadingSize={16} /> : 'Entrar'}
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
