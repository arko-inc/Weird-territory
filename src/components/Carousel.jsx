import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Carousel = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                const carouselBlogs = data.filter(blog => blog.carouselState);
                setBlogs(carouselBlogs);
            })
            .catch((error) => console.error("Error loading blog data:", error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 1) % 100); // Increase progress on each interval
            setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [blogs]);

    useEffect(() => {
        setProgress(0); // Reset progress when currentIndex changes
    }, [currentIndex]);

    if (blogs.length === 0) return null;

    return (
        <div className="relative w-full inline-flex h-2/3 md:h-[36rem] bg-black overflow-hidden rounded-lg">
            <AnimatePresence>
                <motion.div
                    key={blogs[currentIndex]?.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Link to={blogs[currentIndex]?.pageLink}>
                        <img src={blogs[currentIndex]?.img} alt={blogs[currentIndex]?.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h2 className="text-xl font-bold text-white">{blogs[currentIndex]?.title}</h2>
                            <p className="text-gray-300">{blogs[currentIndex]?.description}</p>
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

            {/* Instagram-like Progress Bar */}
            <div className="absolute top-0 left-0 right-0 flex space-x-1 p-2">
                {blogs.map((_, index) => (
                    <div
                        key={index}
                        className="h-1 flex-1 bg-gray-700 rounded"
                        style={{
                            background: currentIndex === index ? "linear-gradient(to right, #3b82f6, transparent)" : "gray",
                            transition: "width 4s linear",
                            width: currentIndex === index ? "100%" : "0%"
                        }}
                    ></div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => setCurrentIndex((currentIndex - 1 + blogs.length) % blogs.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-950 bg-opacity-50 p-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
            </button>
            <button
                onClick={() => setCurrentIndex((currentIndex + 1) % blogs.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {blogs.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-500"}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
