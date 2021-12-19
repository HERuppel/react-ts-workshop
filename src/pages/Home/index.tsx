import React, { useState } from 'react';

// Components
import { Box, Container, Typography } from '@material-ui/core';
import Modal from '../../components/Modal';

// Styles
import { useStyles } from './styles';

// Icons
import { Add } from '@material-ui/icons';

// Hook
import { useItem } from '../../hooks/Item';

const Home: React.FC = () => {
  const classes = useStyles();
  const { items } = useItem();
  const [openModal, setOpenModal] = useState<boolean>(false);

  console.log('ITEMS', items);

  return (
    <Container className={classes.container}>
      <Typography variant='h4'>Bem-vindo(a) ao KRUD!</Typography>
      <Box className={classes.content}>
        <div className={classes.header}>
          <Modal
            open={openModal}
            handleClose={() => setOpenModal(false)}
            handleOpen={() => setOpenModal(true)}
            buttonTitle='Adicionar Item'
            buttonIcon={<Add />}
            buttonClass={classes.addButton}
          />
        </div>
        <div className={classes.body}></div>
      </Box>
    </Container>
  );
};

export default Home;
