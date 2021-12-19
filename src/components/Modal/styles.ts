import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '60%',
      width: '40%',
      backgroundColor: theme.palette.common.white,
      borderRadius: 10,
      padding: theme.spacing(2),
    },
    header: {
      height: '10%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
    },
    closeButton: {
      height: 30,
      position: 'absolute',
      top: 0,
      right: 0,
    },
  }),
);
