import { Container } from '@material-ui/core';
import React from 'react';
import { Post } from '../../@types/Post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Container>
      <h1>post: {post.id}</h1>
      <h1>post: {post.title}</h1>
      <h1>post: {post.body}</h1>
      <h1>post: {post.user.name}</h1>
      <img src={post.image} alt='Post' />
    </Container>
  );
};

export default PostCard;
