import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard"; // Import the BlogCard component

const Filter = () => {
    const { search } = useLocation(); // Get query parameters from the URL
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get("query"); // Get the search query

    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state

    useEffect(() => {
        // Fetch the blog data
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                // Filter blogs based on the query
                const results = data.filter(
                    (blog) =>
                        blog.title.toLowerCase().includes(query.toLowerCase()) ||
                        blog.description.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredBlogs(results);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching blogs:", error));
    }, [query]); // Re-run effect when query changes

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Search Results for: "{query}"</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} /> // Display each blog
                        ))
                    ) : (
                        <p>No blogs found for "{query}"</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Filter;
