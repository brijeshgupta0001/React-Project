import { useContext } from "react";
import { ListOfPost } from "../store/Post-list-store";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(ListOfPost);
  return (
    <>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
export default PostList;
