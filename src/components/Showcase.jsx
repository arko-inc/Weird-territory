import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard"; // Import your BlogCard component
import Sidebar from "./Sidebar"; // Import Sidebar component

const Showcase = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useEffect(() => {
        // Fetch blogs from /public/Blog.json
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data); // Store blogs data in state
                setFilteredBlogs(data); // Initially, show all blogs
            })
            .catch((error) => console.error("Error loading blogs:", error));
    }, []);

    // Function to filter blogs based on selected topic
    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        if (topic === null) {
            setFilteredBlogs(blogs); // Show all blogs
        } else {
            setFilteredBlogs(blogs.filter((blog) => blog.topic === topic));
        }
    };

    return (
        <div className="p-6 bg-black text-white min-h-screen flex flex-row-reverse">
            {/* Sidebar on the right */}
            <Sidebar onSelectTopic={handleSelectTopic} selectedTopic={selectedTopic} />

            {/* Blog Showcase */}
            <div className="mr-64 flex-1"> {/* Adjust right margin for sidebar */}
                <h1 className="text-4xl font-bold mb-6 text-center">Our Latest Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Showcase;
