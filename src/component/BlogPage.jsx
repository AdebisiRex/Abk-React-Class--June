import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassBased from "./ClassBased";

const BlogPage = ({taskArray}) => {
  const [posts, setPosts] = useState([]);

  const getBlogs = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let blogs = await res.json()
    // let blogs = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(blogs);
    // setTimeout(()=>{
      // setPosts(blogs.data);
      setPosts(blogs);

    // }, 5000)
  };
  useEffect(() => {
    // console.log("component had been mounted")
    // getBlogs();
  }, []);

  // if(posts.length< 1){
  //   return (
  //     <div class="spinner-border text-danger" role="status">
  //       <span class="visually-hidden">Loading...</span>
  //     </div>
  //   );
  // }
  return (
    <div className="container">
      <h1>This is our blog</h1>

      <ClassBased taskArray={taskArray}/>

      <div className="row g-2">
        {posts.length > 0 ? (
          posts.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 border border-2 shadow-sm rounded-2"
            >
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
