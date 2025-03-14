import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Rightbar";
const Landing = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useEffect(() => {
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                // Sort by priority (higher first), then by ID (higher first)
                const sortedBlogs = data.sort((a, b) => {
                    if (b.priority !== a.priority) {
                        return b.priority - a.priority;
                    }
                    return b.id - a.id;
                });

                setBlogs(sortedBlogs);
                setFilteredBlogs(sortedBlogs);
            })
            .catch((error) => console.error("Error loading blog data:", error));
    }, []);

    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        if (topic === null) {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter(blog => blog.topic === topic));
        }
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen flex">
            {/* Sidebar */}
            <Sidebar onSelectTopic={handleSelectTopic} selectedTopic={selectedTopic} />

            <div className="flex-1 ml-6">
                <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>

                {/* Carousel */}
                <Carousel />

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredBlogs.map((blog) => (
                        <motion.div 
                            key={blog.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                        >
                            <Link to={blog.pageLink}>
                                <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-3" />
                                <h3 className="text-lg font-bold">{blog.title}</h3>
                                <p className="text-sm text-gray-300">{blog.description}</p>
                                <span className="text-blue-400 mt-2 inline-block">Read More →</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landing;
