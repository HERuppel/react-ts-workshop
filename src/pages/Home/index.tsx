import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography>Home</Typography>
    </Container>
  );
};

export default Home;
