import React, { useState } from 'react';

// Components
import { Box, Container, Typography } from '@material-ui/core';
import Modal from '../../../components/Modal';

// Styles
import { useStyles } from './styles';

// Icons
import { Add } from '@material-ui/icons';

// Hook
import { usePost } from '../../../hooks/Item';

const Posts: React.FC = () => {
  const classes = useStyles();
  const { posts } = usePost();
  const [openModal, setOpenModal] = useState<boolean>(false);

  console.log('posts', posts);

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

export default Posts;
