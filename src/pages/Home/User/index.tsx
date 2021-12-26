import React from 'react';
import { useStyles } from './styles';

import tommy from '../../../assets/tommy.png';
import { Typography } from '@material-ui/core';

const User: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img className={classes.img} src={tommy} alt='profile' />
        <div className={classes.userInfos}>
          <Typography variant='h5' color='textPrimary'>
            Nome
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            E-mail
          </Typography>
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant='h3' color='primary'>
          Meus Posts
        </Typography>
        {/* List user posts */}
      </div>
    </div>
  );
};

export default User;
