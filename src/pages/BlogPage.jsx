import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blog = {
  title: "Exploring the Mysteries of Quantum Mechanics",
  author: "Arko A",
  date: "March 14, 2025",
  image: "/images/quantum.jpg",  // Replace with your image later
  content: [
    {
      heading: "What is Quantum Mechanics?",
      text: "Quantum mechanics is the fundamental theory in physics describing the physical properties of nature at the scale of atoms and subatomic particles. It provides a mathematical framework for understanding phenomena such as wave-particle duality and quantum entanglement.",
      img: "/images/quantum-image.jpg"  // Replace with your image later
    },
    {
      heading: "Wave-Particle Duality",
      text: "One of the key principles of quantum mechanics is wave-particle duality. This concept proposes that particles, such as electrons and photons, exhibit both particle-like and wave-like behavior depending on the experiment performed. This discovery has revolutionized our understanding of light and matter.",
      img: "/images/quantum-wave.jpg"  // Replace with your image later
    },
    {
      heading: "Quantum Entanglement",
      text: "Quantum entanglement is a phenomenon where two or more particles become correlated in such a way that the state of one particle instantly affects the state of the other, even over large distances. This spooky action at a distance puzzled even Einstein.",
      img: "/images/quantum-entanglement.jpg"  // Replace with your image later
    },
  ]
};

export default function BlogPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <motion.header className="p-8 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700">
        <div className="max-w-6xl mx-auto">
          <motion.h1 className="text-4xl font-bold mb-2">{blog.title}</motion.h1>
          <motion.p className="text-lg text-gray-300">By {blog.author} | {blog.date}</motion.p>
        </div>
      </motion.header>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Main Image */}
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Blog Content */}
        {blog.content.map((section, index) => (
          <motion.section
            key={index}
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4">{section.heading}</h2>
            <p className="text-lg text-gray-300 mb-4">{section.text}</p>
            <motion.img
              src={section.img}
              alt={section.heading}
              className="w-full h-72 object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.section>
        ))}
      </div>

      {/* Sidebar Section */}
      <motion.div
        className="bg-gray-800 p-8 text-gray-300 w-full md:w-1/4 fixed right-0 top-0 bottom-0 overflow-y-auto hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-6">Related Topics</h3>
        <ul className="space-y-4">
          <li><Link to="/quantum" className="hover:text-blue-400">Wave-Particle Duality</Link></li>
          <li><Link to="/quantum-entanglement" className="hover:text-blue-400">Quantum Entanglement</Link></li>
          <li><Link to="/quantum-computing" className="hover:text-blue-400">Quantum Computing</Link></li>
          <li><Link to="/quantum-physics" className="hover:text-blue-400">The Fundamentals of Quantum Physics</Link></li>
        </ul>
      </motion.div>
    </div>
  );
}
