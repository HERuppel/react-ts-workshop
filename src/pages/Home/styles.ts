import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    },
    content: {
      height: '90%',
      width: '100%',
      backgroundColor: theme.palette.divider,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
  }),
);
