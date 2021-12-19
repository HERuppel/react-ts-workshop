import React from 'react';

// Components
import { Box, Container, Typography, Button } from '@material-ui/core';

// Styles
import { useStyles } from './styles';

// Icons
import { Add } from '@material-ui/icons';

// Hook
import { useItem } from '../../hooks/Item';

const Home: React.FC = () => {
  const classes = useStyles();
  const { items } = useItem();

  console.log('ITEMS', items);

  return (
    <Container className={classes.container}>
      <Typography variant='h4'>Bem-vindo(a) ao KRUD!</Typography>
      <Box className={classes.content}>
        <div className={classes.header}>
          <Button className={classes.addButton} endIcon={<Add />}>
            Adicionar Item
          </Button>
        </div>
        <div className={classes.body}></div>
      </Box>
    </Container>
  );
};

export default Home;
