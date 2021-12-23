import React from 'react';
import { Modal as ModalComponent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { Close, Save } from '@material-ui/icons';

import { Post } from '../../@types/Post';

import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';

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

  const onSubmit = (data: Post) => {
    console.log(data);
  };

  const closeModal = (): void => {
    reset();
    handleClose();
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
            <Typography variant='h5'>Adicionar Post</Typography>
            <Button className={classes.closeButton} endIcon={<Close fontSize='large' />} onClick={closeModal}>
              Fechar
            </Button>
          </div>
          <FormProvider {...formMethods}>
            <form id='form' className={classes.body} onSubmit={handleSubmit(onSubmit)}>
              <Input name='name' label='Nome' required givenError='Insira o nome' />
              <Input name='author' label='Autor' required givenError='Insira o autor' />
              <Button type='submit' endIcon={<Save />}>
                Salvar
              </Button>
            </form>
          </FormProvider>
        </Box>
      </ModalComponent>
    </>
  );
};

export default Modal;
