import React, { createContext, useCallback, useContext, useState } from 'react';
import { Post } from '../../@types/Post';
import { Response } from '../../@types/Response';
import { api } from '../../services/api';

interface PostContextData {
  posts: Post[];
  addPost: (newPost: Post) => Promise<Response<Post>>;
  fetchPosts: () => Promise<void>;
  fetchPostsByUser: (userId: string) => Promise<Response<Post[]>>;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = useCallback(async (newPost: Post): Promise<Response<Post>> => {
    const { data }: { data: Response<Post> } = await api.post('post/create', newPost);

    setPosts(prev => {
      const newPosts = [data.content as Post, ...prev];

      return newPosts;
    });

    return data;
  }, []);

  const fetchPosts = useCallback(async (): Promise<void> => {
    const { data }: { data: Response<Post[]> } = await api.get('post/read');

    setPosts(data.content as Post[]);
  }, []);

  const fetchPostsByUser = useCallback(async (userId: string): Promise<Response<Post[]>> => {
    const { data }: { data: Response<Post[]> } = await api.get(`post/read/${userId}`);

    return data;
  }, []);

  // const updatePost = useCallback(async (updatedPost: Post): Promise<void> => {
  //   const newPosts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
  // }, []);

  // const deletePost = useCallback(async (deletedPost: Post): Promise<void> => {
  //   const newPosts = posts.filter(post => post.id !== deletedPost.id);
  // }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        fetchPosts,
        fetchPostsByUser,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = (): PostContextData => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('Este recurso deve ser utilizado dentro de seu provider');
  }

  return context;
};
