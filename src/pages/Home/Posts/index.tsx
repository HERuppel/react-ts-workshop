import React, { useCallback, useEffect, useState } from 'react';
import { Box, ButtonBase, Container, Typography } from '@material-ui/core';
import Modal from '../../../components/Modal';
import { useStyles } from './styles';
import { Add, Refresh } from '@material-ui/icons';
import { usePost } from '../../../hooks/Post';
import { showAlert } from '../../../utils/showAlert';
import Loading from '../../../components/Loading';
import PostCard from '../../../components/PostCard';

const Posts = (): JSX.Element => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { posts, fetchPosts } = usePost();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await fetchPosts();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        showAlert({
          title: 'Ops...',
          icon: 'error',
          text: err.response.data.message,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchPosts]);

  const refreshPage = useCallback(async () => {
    try {
      setLoading(true);
      await fetchPosts();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showAlert({
        title: 'Ops...',
        icon: 'error',
        text: err.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  }, [fetchPosts]);

  return (
    <Container className={classes.container}>
      <Typography variant='h4' color='primary'>
        Bem-vindo(a) ao KRUD!
      </Typography>
      <Box className={classes.content}>
        <div className={classes.header}>
          <ButtonBase className={classes.refreshContainer} onClick={refreshPage}>
            <Typography variant='h6'>Recarregar</Typography>
            <Refresh />
          </ButtonBase>
          <Modal
            open={openModal}
            handleClose={() => setOpenModal(false)}
            handleOpen={() => setOpenModal(true)}
            buttonTitle='Adicionar post'
            buttonIcon={<Add />}
            buttonClass={classes.addButton}
          />
        </div>
        <div className={classes.body}>
          {loading ? (
            <div className={classes.loadingContainer}>
              <Loading loadingSize={50} />
            </div>
          ) : (
            posts.map(post => <PostCard key={post.id} post={post} />)
          )}
        </div>
      </Box>
    </Container>
  );
};

export default Posts;
