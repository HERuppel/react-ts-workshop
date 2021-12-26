import React, { useState } from 'react';
import { Box, ButtonBase, Container, Typography } from '@material-ui/core';
import Modal from '../../../components/Modal';
import { useStyles } from './styles';
import { Add, Refresh } from '@material-ui/icons';

const Posts: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Container className={classes.container}>
      <Typography variant='h4' color='primary'>
        Bem-vindo(a) ao KRUD!
      </Typography>
      <Box className={classes.content}>
        <div className={classes.header}>
          <ButtonBase className={classes.refreshContainer} onClick={() => console.log('refresh')}>
            <Typography variant='h6'>Recarregar</Typography>
            <Refresh />
          </ButtonBase>
          <Modal
            open={openModal}
            handleClose={() => setOpenModal(false)}
            handleOpen={() => setOpenModal(true)}
            buttonTitle='Adicionar post'
            buttonIcon={<Add />}
            buttonClass={classes.addButton}
          />
        </div>
        <div className={classes.body}>{/* List Posts */}</div>
      </Box>
    </Container>
  );
};

export default Posts;
