import { Container } from '@material-ui/core';
import React from 'react';
import { Post } from '../../@types/Post';
import { useAuth } from '../../hooks/Auth';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const {
    user: { id, name },
  } = useAuth();

  return (
    <Container>
      <h1>post: {post.title}</h1>
      <h1>post: {post.body}</h1>
      <h1>post: {post.userId === id ? name : post.user.name}</h1>
      <img src={post.imageUrl} alt='Post' />
    </Container>
  );
};

export default PostCard;
