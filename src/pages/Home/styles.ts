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
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    header: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      width: '100%',
    },
    addButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    body: {
      display: 'flex',
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(2),
    },
  }),
);
