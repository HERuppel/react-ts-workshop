import React from 'react';
import { Modal as ModalComponent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { Close } from '@material-ui/icons';
import { Item } from '../../@types/Item';

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
            <Button
              className={classes.closeButton}
              endIcon={<Close fontSize='large' />}
              onClick={handleClose}
            >
              Fechar
            </Button>
          </div>
        </Box>
      </ModalComponent>
    </>
  );
};

export default Modal;
