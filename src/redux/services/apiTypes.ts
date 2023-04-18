import { IPost } from '../../components/post/Post.types';

export default interface Iapi {
  docs: IPost[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
