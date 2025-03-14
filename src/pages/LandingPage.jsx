import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const blogs = [
    { id: 1, title: "Quantum Mechanics Explained", description: "Understanding wave-particle duality.", img: "/images/quantum.jpg" },
    { id: 2, title: "Mars Colonization", description: "How we can settle on Mars.", img: "/images/mars.jpg" },
    { id: 3, title: "Black Holes", description: "What happens beyond the event horizon?", img: "/images/blackhole.jpg" },
    { id: 4, title: "AI in Space Exploration", description: "How AI is changing space missions.", img: "/images/ai.jpg" },
    { id: 5, title: "The Future of Space Telescopes", description: "Next-gen observatories.", img: "/images/telescope.jpg" }
];
const LandingPage = () =>{
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-6 bg-gray-900 text-white">
            {/* Left Side - Blog Carousel */}
            <div className="md:w-3/4">
                <Slider {...carouselSettings} className="mb-8">
                    {blogs.map((blog) => (
                        <motion.div key={blog.id} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative">
                            <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-b-lg">
                                <h2 className="text-xl font-bold">{blog.title}</h2>
                                <p className="text-sm">{blog.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>

                {/* Animated Blog Cards */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                    }}>
                    {blogs.map((blog) => (
                        <motion.div key={blog.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-3" />
                            <h3 className="text-lg font-bold">{blog.title}</h3>
                            <p className="text-sm text-gray-300">{blog.description}</p>
                            <Link to={`/blog/${blog.id}`} className="text-blue-400 mt-2 inline-block">Read More →</Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-1/4 md:ml-6 mt-6 md:mt-0">
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
                    <ul className="space-y-3">
                        <li><Link to="/category/quantum" className="hover:text-blue-400">Quantum Physics</Link></li>
                        <li><Link to="/category/mars" className="hover:text-blue-400">Mars Exploration</Link></li>
                        <li><Link to="/category/ai" className="hover:text-blue-400">AI in Space</Link></li>
                        <li><Link to="/category/blackholes" className="hover:text-blue-400">Black Holes</Link></li>
                        <li><Link to="/category/telescopes" className="hover:text-blue-400">Space Telescopes</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;