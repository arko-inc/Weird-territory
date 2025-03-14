import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
    { id: 1, title: "Quantum Mechanics Explained", description: "Understanding wave-particle duality.", img: "/images/quantum.jpg", content: "Quantum mechanics is the study of..." },
    { id: 2, title: "Mars Colonization", description: "How we can settle on Mars.", img: "/images/mars.jpg", content: "Mars is the next frontier for human exploration..." },
    { id: 3, title: "Black Holes", description: "What happens beyond the event horizon?", img: "/images/blackhole.jpg", content: "Black holes are regions of spacetime where gravity is so strong..." },
    { id: 4, title: "AI in Space Exploration", description: "How AI is changing space missions.", img: "/images/ai.jpg", content: "Artificial intelligence plays a huge role in..." },
    { id: 5, title: "The Future of Space Telescopes", description: "Next-gen observatories.", img: "/images/telescope.jpg", content: "The James Webb Space Telescope is just the beginning..." }
];

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term.length > 0) {
            const results = blogs
                .filter(blog => blog.title.toLowerCase().includes(term.toLowerCase()) || blog.description.toLowerCase().includes(term.toLowerCase()))
                .slice(0, 5);
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs([]);
        }
    };

    return (
        <motion.nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">Weird Territory</Link>

            {/* Search Bar */}
            <div className="relative">
                <TextField
                    variant="outlined"
                    size="small"
                    className="bg-gray-800 text-white rounded-lg"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search className="text-gray-400" />
                            </InputAdornment>
                        ),
                        style: { color: 'white' }
                    }}
                />
                
                {/* Search Results */}
                {filteredBlogs.length > 0 && (
                    <motion.div className="absolute w-full bg-gray-800 text-white shadow-lg mt-1 rounded-lg p-2 max-h-60 overflow-y-auto"
                        initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                        {filteredBlogs.map((blog) => (
                            <Link to={`/blog/${blog.id}`} key={blog.id} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg">
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
                <Link to="/about" className="hover:text-gray-400">About</Link>
                <Link to="/blogs" className="hover:text-gray-400">Blogs</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </div>
        </motion.nav>
    );
}
export default Navbar;