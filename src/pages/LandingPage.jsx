import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const blogs = [
    { id: 1, title: "Quantum Mechanics Explained", description: "Understanding wave-particle duality.", img: "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mars Colonization", description: "How we can settle on Mars.", img: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "Black Holes", description: "What happens beyond the event horizon?", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FNvciWlZunSndFkWKGYf0uZz1i9ZmplbFg&s" },
    { id: 4, title: "AI in Space Exploration", description: "How AI is changing space missions.", img: "https://beconnected.esafety.gov.au/pluginfile.php/99437/mod_resource/content/2/what-is-ai%20%281%29.jpg" },
    { id: 5, title: "The Future of Space Telescopes", description: "Next-gen observatories.", img: "https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp" }
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
                            <img src={blog.img} alt={blog.title} className="w-full h-[36rem] object-cover rounded-lg" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 p-4 rounded-b-lg">
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