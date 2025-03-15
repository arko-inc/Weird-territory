import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/Rightsidebar";
import Story from "../components/Story";

const Landing = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useEffect(() => {
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                const sortedBlogs = data.sort((a, b) => {
                    if (b.priority !== a.priority) return b.priority - a.priority;
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
        <div className="p-6 bg-black text-white min-h-screen">
            {/* Three-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Left Column: Sidebar */}
                <div className="md:col-span-2">
                   
                    <RightSidebar />
                </div>

                {/* Middle Column: Carousel + Blogs */}
                <div className="md:col-span-8">
                    <h1 className="text-7xl font-thin mb-6 text-blue-400">Latest Blogs</h1>

                    {/* Carousel Section */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Story/>
                    </motion.div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {filteredBlogs.map((blog) => (
                            <motion.div
                                key={blog.id}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-950 p-4 rounded-lg shadow-lg"
                            >
                                <Link to={blog.pageLink}>
                                    <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-3" />
                                    <h3 className="text-lg font-bold">{blog.title}</h3>
                                    <p className="text-sm text-gray-300">{blog.description}</p>
                                    <span className="text-emerald-400 mt-2 inline-block">Read More →</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: RightSidebar */}
                <div className="md:col-span-2">
                <Sidebar onSelectTopic={handleSelectTopic} selectedTopic={selectedTopic} />
                </div>
            </div>
        </div>
    );
};

export default Landing;
