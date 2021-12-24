import React, { useEffect, useState } from 'react';

// Components
import { Box, Container, Typography } from '@material-ui/core';
import Modal from '../../../components/Modal';

// Styles
import { useStyles } from './styles';

// Icons
import { Add } from '@material-ui/icons';

// Hook
import { usePost } from '../../../hooks/Post';
import PostCard from '../../../components/PostCard';
import { showAlert } from '../../../utils/showAlert';
import Loading from '../../../components/Loading';

const Posts: React.FC = () => {
  const classes = useStyles();
  const { posts, fetchPosts } = usePost();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <Container className={classes.container}>
      <Typography variant='h4'>Bem-vindo(a) ao KRUD!</Typography>
      <Box className={classes.content}>
        <div className={classes.header}>
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
          {loading ? <Loading loadingSize={50} /> : posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </Box>
    </Container>
  );
};

export default Posts;
