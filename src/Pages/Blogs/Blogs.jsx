import React from "react";
import { useSelector } from "react-redux";
import { getBlogState } from "../../Redux/Slice/BlogSlice/BlogSlice";

function Blogs() {
  const { blogs } = useSelector(getBlogState);
  console.log(blogs);
  return <div>Blogs</div>;
}

export default Blogs;
