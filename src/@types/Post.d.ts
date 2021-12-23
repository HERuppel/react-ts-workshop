import { User } from './User';

export interface Post {
  id?: string;
  title: string;
  text: string;
  image?: string;
  authorId: string;
  author: User;
}
