import React, { useState } from 'react';
import { Modal as ModalComponent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { Close, Save } from '@material-ui/icons';
import { FormProvider, useForm } from 'react-hook-form';
import { Post } from '../../@types/Post';
import Input from '../Input';
import Loading from '../Loading';
import { usePost } from '../../hooks/Post';
import { useAuth } from '../../hooks/Auth';
import { showAlert } from '../../utils/showAlert';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  buttonTitle?: string;
  buttonIcon?: React.ReactElement;
  buttonClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  handleOpen,
  buttonTitle,
  buttonIcon,
  buttonClass,
}: ModalProps) => {
  const classes = useStyles();
  const formMethods = useForm<Post>();
  const { handleSubmit, reset } = formMethods;
  const [loading, setLoading] = useState<boolean>(false);
  const { addPost } = usePost();
  const {
    user: { id },
  } = useAuth();

  const onSubmit = async (data: Post): Promise<void> => {
    try {
      setLoading(true);
      const res = await addPost({ ...data, userId: id });

      showAlert({
        title: 'Sucesso!',
        icon: 'success',
        text: res.message,
        customClass: classes.swalContainer,
      });
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showAlert({
        title: 'Ops...',
        icon: 'error',
        text: err.response.data.message,
        customClass: classes.swalContainer,
      });
    } finally {
      setLoading(false);
    }
  };

  const onClose = (): void => {
    handleClose();
    reset();
  };

  return (
    <>
      <Button className={buttonClass} onClick={handleOpen} endIcon={buttonIcon}>
        {buttonTitle || 'Abrir'}
      </Button>
      <ModalComponent
        open={open}
        onClose={handleClose}
        className={classes.container}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={classes.content}>
          <div className={classes.header}>
            <Typography variant='h5' color='secondary'>
              Adicionar Post
            </Typography>
            <Button className={classes.closeButton} endIcon={<Close fontSize='large' />}>
              Fechar
            </Button>
          </div>
          <FormProvider {...formMethods}>
            <form className={classes.body} onSubmit={handleSubmit(onSubmit)}>
              <Input
                variant='outlined'
                name='title'
                label='Título'
                required
                givenError='Insira o título do post'
              />
              <Input
                variant='outlined'
                name='imageUrl'
                label='Imagem'
                required
                givenError='A imagem do post é requerida'
              />
              <Input
                variant='outlined'
                name='body'
                label='Text'
                required
                givenError='Insira o texto'
                multiline
                minRows={4}
                maxRows={6}
                customClass={classes.textarea}
              />
              <Button className={classes.button} type='submit' endIcon={<Save />}>
                {loading ? <Loading loadingSize={16} /> : 'Salvar'}
              </Button>
            </form>
          </FormProvider>
        </Box>
      </ModalComponent>
    </>
  );
};

export default Modal;
