import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const blogs = [
    { id: 1, title: "10 Amazing Science Facts", description: "Discover mind-blowing science facts!" },
    { id: 2, title: "The Mystery of Black Holes", description: "Learn about the secrets of black holes." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <h1 className="text-6xl font-bold text-center mb-8">Welcome to Science Facts Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            <p className="mb-4">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="bg-white text-blue-500 px-4 py-2 rounded-lg">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
