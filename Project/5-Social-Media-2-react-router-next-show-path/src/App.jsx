import "./App.css";
import Footer from "./Componants/Footer";
import Header from "./Componants/Header";
import Sidebar from "./Componants/Sidebar";
import CreatePost from "./Componants/CreatePost";
import PostList from "./Componants/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "./store/Post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
