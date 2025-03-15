import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TextField, InputAdornment } from "@mui/material";
import { Search, X } from "lucide-react"; // Importing icons from Lucide-react
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate(); // We need this for programmatic navigation

    // Fetch blogs from Blog.json
    useEffect(() => {
        fetch("/Blog.json")
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const results = blogs
                .filter(blog => 
                    blog.title.toLowerCase().includes(term.toLowerCase()) || 
                    (blog.passage?.toLowerCase() || "").includes(term.toLowerCase())
                )
                .slice(0, 5);
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs([]);
        }
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setFilteredBlogs([]); // Hide search results
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle "Enter" key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (filteredBlogs.length === 1) {
                navigate(filteredBlogs[0].pageLink);
            } else if (filteredBlogs.length > 1) {
                navigate(`/filter?query=${searchTerm}`);
            }
        }
    };

    const clearSearch = () => {
        setSearchTerm("");
        setFilteredBlogs([]);
    };

    return (
        <motion.nav 
            className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-50"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">Weird Territory</Link>

            {/* Search Bar */}
            <div ref={searchRef} className="relative w-2/4">
                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    className="bg-gray-800 text-white rounded-lg"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyPress} // Handling "Enter" key press
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search className="text-gray-400" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            searchTerm && (
                                <InputAdornment position="end">
                                    <X 
                                        className="text-gray-400 cursor-pointer" 
                                        onClick={clearSearch} // Clear search when clicked
                                    />
                                </InputAdornment>
                            )
                        ),
                        style: { color: 'white' }
                    }}
                />
                
                {/* Search Results Dropdown */}
                {filteredBlogs.length > 0 && (
                    <motion.div 
                        className="absolute w-full h-auto bg-gray-800 text-white shadow-lg mt-1 rounded-lg p-2  overflow-y-auto z-50"
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.3 }}
                    >
                        {filteredBlogs.map((blog) => (
                            <Link 
                                to={blog.pageLink} 
                                key={blog.id} 
                                className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg"
                                onClick={() => setFilteredBlogs([])}
                            >
                                <img src={blog.img} alt={blog.title} className="w-12 h-12 object-cover rounded-lg" />
                                <div>
                                    <p className="font-semibold">{blog.title}</p>
                                    <p className="text-sm text-gray-400">{blog.description}</p>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-400">Home</Link>
                <Link to="/about" className="hover:text-gray-400">About</Link>
                <Link to="/blogs" className="hover:text-gray-400">Blogs</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
        </motion.nav>
    );
}

export default Navbar;
