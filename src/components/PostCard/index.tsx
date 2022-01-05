import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import React from 'react';
import { Post } from '../../@types/Post';
import { useStyles } from './styles';

import { ExpandMore } from '@material-ui/icons';
import { maskDate } from '../../utils/maskDate';

import tommy from '../../assets/tommy.png';
import { useAuth } from '../../hooks/Auth';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const classes = useStyles();
  const {
    user: { id, name, email },
  } = useAuth();

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item xs={2} className={classes.imgContainer}>
        <img className={classes.img} src={post.imageUrl ? post.imageUrl : tommy} alt='Post' />
      </Grid>
      <Grid className={classes.right} item xs={10}>
        <div>
          <Typography variant='h4' color='secondary'>
            {post.title}
          </Typography>
          {post.user && (
            <Typography variant='h6'>
              Autor: {post.user.id === id ? name : post.user.name}{' '}
              <span className={classes.email}>({post.user.id === id ? email : post.user.email})</span>
            </Typography>
          )}
          <Typography variant='subtitle1' color='textSecondary'>
            {maskDate(new Date(post.createdAt))}
          </Typography>
        </div>
        <div>
          <Accordion elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
              <Typography variant='h6'>Ver conteúdo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography align='justify' variant='body1'>
                {post.body}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </Grid>
  );
};

export default PostCard;
