import { useContext, useEffect, useState } from "react";
import { ListOfPost } from "../store/Post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(ListOfPost);
  const [fetching, setfetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts", { signal });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        addInitialPosts(data.posts);

        setfetching(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setfetching(false);
        }
      }
    };

    fetchData();

    return () => {
      console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);

  if (fetching) {
    return <LoadingSpinner />;
  } else if (!fetching && postList.length === 0) {
    return <WelcomeMessage />;
  } else {
    return (
      <>
        {postList.map((post) => {
          console.log(post.id);
          return <Post key={post.id} post={post} />;
        })}
        ;
      </>
    );
  }
};
export default PostList;
