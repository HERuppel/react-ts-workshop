import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';

import tommy from '../../../assets/tommy.png';
import { Typography } from '@material-ui/core';
import { useAuth } from '../../../hooks/Auth';
import { showAlert } from '../../../utils/showAlert';
import { Post } from '../../../@types/Post';
import { usePost } from '../../../hooks/Post';
import Loading from '../../../components/Loading';
import PostCard from '../../../components/PostCard';

const User = (): JSX.Element => {
  const classes = useStyles();
  const { user } = useAuth();
  const { fetchPostsByUser } = usePost();
  const [loading, setLoading] = useState<boolean>(true);
  const [myPosts, setMyPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchPostsByUser(user.id as string);

        setMyPosts(res.content as Post[]);
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
  }, [fetchPostsByUser, user]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img className={classes.img} src={tommy} alt='profile' />
        <div className={classes.userInfos}>
          <Typography variant='h5' color='textPrimary'>
            {user.name}
          </Typography>
          <Typography variant='h5' color='textSecondary'>
            {user.email}
          </Typography>
        </div>
      </div>
      <div className={classes.body}>
        <Typography variant='h3' color='primary'>
          Meus Posts
        </Typography>
        {loading ? (
          <div className={classes.loadingContainer}>
            <Loading loadingSize={50} />
          </div>
        ) : (
          myPosts.map(post => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default User;
