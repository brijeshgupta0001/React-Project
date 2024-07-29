import { createContext, useReducer } from "react";

export const ListOfPost = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const DEFAULT_POSTLIST = [
    {
      id: "1",
      title: "Going to Mumbai",
      body: "Hi Friends, I am oing to Mumbaifor my vacation. hope to enjoy a lot, peace Out.",
      reactions: "2",
      userID: "user-9",
      tags: ["vacation", "Mumbai", "Enjoy"],
    },
    {
      id: "2",
      title: "Pass Ho gaye",
      body: "char saal ki masti ke baad bhi pass ho gaye",
      reactions: "24",
      userID: "user-29",
      tags: ["Graduating", "Unbelievable"],
    },
  ];
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POSTLIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <ListOfPost.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </ListOfPost.Provider>
  );
};
export default PostListProvider;
