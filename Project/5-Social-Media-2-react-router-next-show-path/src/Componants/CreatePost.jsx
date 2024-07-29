import { useContext, useRef, useState } from "react";
import { ListOfPost } from "../store/Post-list-store";

import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  //const navigate = useNavigate();

  //const { addPost } = useContext(ListOfPost);
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const likesElement = useRef();
  // const dislikesElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const userId = userIdElement.current.value;
  //   // const postTitle = postTitleElement.current.value;
  //   // const postBody = postBodyElement.current.value;
  //   // const likes = likesElement.current.value;
  //   // const dislikes = dislikesElement.current.value;
  //   // const tags = tagsElement.current.value.split(" ");

  //   // userIdElement.current.value = "";
  //   // postTitleElement.current.value = "";
  //   // postBodyElement.current.value = "";
  //   // likesElement.current.value = "";
  //   // dislikesElement.current.value = "";
  //   // tagsElement.current.value = "";
  // };

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your UserId Here
          </label>
          <input
            name="userId"
            type="text"
            className="form-control"
            id="userId"
            placeholder="your UserId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            name="body"
            rows="4"
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us something about it..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No. Of Likes
          </label>
          <input
            name="likes"
            type="text"
            className="form-control"
            id="reactions"
            placeholder="how many Like this post..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No. Of Dislikes
          </label>
          <input
            name="dislikes"
            type="text"
            className="form-control"
            id="reactions"
            placeholder="how many Dislike this post..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your Hashtags Here
          </label>
          <input
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: postData.title,
      userId: postData.userId,
      reactions: {
        likes: postData.likes,
        dislikes: postData.dislikes,
      },
      tags: postData.tags.split(" "),
      body: postData.body,
      /* other post data */
    }),
  })
    .then((res) => res.json())
    .then((resObj) => {
      //addPost(resObj);
      console.log(resObj);
      // navigate("/");
    });

  return redirect("/");
}
export default CreatePost;
