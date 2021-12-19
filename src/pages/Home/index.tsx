import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useItem } from '../../hooks/Item';
import { useStyles } from './styles';

const Home: React.FC = () => {
  const classes = useStyles();
  const { items } = useItem();

  console.log('ITEMS', items);

  return (
    <Container className={classes.container}>
      <Typography variant='h4'>Bem-vindo(a) ao KRUD!</Typography>
      <Box className={classes.content}>
        <Typography>Hey</Typography>
      </Box>
    </Container>
  );
};

export default Home;
