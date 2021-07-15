import { Post } from "../../../../../../redux/reducers/postsReducer/interfaces";

export interface PostHeaderProps {
  name: Post["author"]["name"];
  image: Post["author"]["image"];
  date: Post["post"]["date"];
}
