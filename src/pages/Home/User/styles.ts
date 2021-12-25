import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: theme.palette.divider,
      borderRadius: '20px 20px 0 0',
      padding: theme.spacing(4),
      display: 'flex',
      gap: 50,
    },
    body: {},
    img: {
      borderRadius: '50%',
      width: 180,
      objectFit: 'cover',
      borderColor: theme.palette.primary.dark,
      borderWidth: 2,
      borderStyle: 'solid',
    },
    userInfos: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);
