import React from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const blog = {
    id: 1,
    title: "10 Amazing Science Facts",
    content: "Here are some amazing science facts...",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700">{blog.content}</p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">Like</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4">Comment</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Share</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;