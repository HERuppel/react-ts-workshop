import React from 'react';
import { Modal as ModalComponent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { Close, Save } from '@material-ui/icons';

import { Item } from '../../@types/Item';

import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  buttonTitle?: string;
  buttonIcon?: React.ReactElement;
  buttonClass?: string;
  editItem?: Item;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  handleOpen,
  buttonTitle,
  buttonIcon,
  buttonClass,
  editItem,
}: ModalProps) => {
  const classes = useStyles();
  const formMethods = useForm<Item>();
  const { handleSubmit, reset } = formMethods;

  const onSubmit = (data: Item) => {
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
            <Typography variant='h5'>{editItem ? `Editar ${editItem.name}` : 'Adicionar Item'}</Typography>
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
