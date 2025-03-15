import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Rocket, Radiation, Home, Mountain, Timer, Snowflake, Users } from "lucide-react";
import { Helmet } from "react-helmet"; // Import react-helmet

const MarsColonization = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* SEO using react-helmet */}
      <Helmet>
        <title>Mars Colonization - Exploring the Possibilities of Human Life Beyond Earth</title>
        <meta name="description" content="Learn about the exciting possibilities of colonizing Mars and the technologies that can make human life beyond Earth a reality." />
        <meta name="keywords" content="Mars, colonization, space exploration, human life on Mars, Mars base, Terraforming, travel to Mars" />
        <meta property="og:title" content="Mars Colonization - Exploring the Possibilities of Human Life Beyond Earth" />
        <meta property="og:description" content="Learn about the exciting possibilities of colonizing Mars and the technologies that can make human life beyond Earth a reality." />
        <meta property="og:image" content="https://source.unsplash.com/1600x900/?mars,space" />
        <meta property="og:url" content="https://weird-territory.vercel.app/mars-colonization" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mars Colonization - Exploring the Possibilities of Human Life Beyond Earth" />
        <meta name="twitter:description" content="Learn about the exciting possibilities of colonizing Mars and the technologies that can make human life beyond Earth a reality." />
        <meta name="twitter:image" content="https://source.unsplash.com/1600x900/?mars,space" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?mars,space')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mars Colonization 🏜️
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">Exploring the possibilities of human life beyond Earth.</p>
        </div>
      </section>

      {/* Why Mars? */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <motion.h2 className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          Why Colonize Mars? 🚀
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Rocket, title: "A New Home", desc: "Mars offers the best chance for a backup planet." },
            { icon: Rocket, title: "Scientific Discovery", desc: "Unravel the mysteries of the Red Planet." },
            { icon: Radiation, title: "Space Evolution", desc: "Pushing human capabilities beyond Earth." },
          ].map((item, index) => (
            <motion.div key={index} className="p-6 bg-gray-800 text-white rounded-lg flex items-center gap-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <item.icon size={40} className="text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mars Base Concepts */}
      <section className="py-16 px-8 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">Mars Base Concepts 🏠</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Dome Cities", img: "https://source.unsplash.com/400x300/?space,dome", desc: "Transparent domes for sustainable living." },
            { title: "Underground Shelters", img: "https://source.unsplash.com/400x300/?mars,cave", desc: "Using lava tubes for natural protection." },
            { title: "3D Printed Habitats", img: "https://source.unsplash.com/400x300/?mars,house", desc: "Utilizing Martian soil to construct shelters." },
          ].map((base, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <Card className="bg-gray-700 text-white">
                <CardMedia component="img" height="180" image={base.img} alt={base.title} />
                <CardContent>
                  <Typography variant="h6">{base.title}</Typography>
                  <Typography variant="body2" className="text-gray-300">{base.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Blog Sections */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">More Mars Colonization Topics 🌍</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Home, title: "Living on Mars", desc: "How can humans survive on the Red Planet?" },
            { icon: Mountain, title: "Terraforming Mars", desc: "Can we make Mars more like Earth?" },
            { icon: Timer, title: "Travel to Mars", desc: "How long does it take to get there?" },
            { icon: Snowflake, title: "Water on Mars", desc: "Exploring the frozen lakes beneath Mars' surface." },
            { icon: Users, title: "First Martian Colonists", desc: "What skills are needed for Mars settlers?" },
          ].map((topic, index) => (
            <motion.div key={index} className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <topic.icon size={40} className="text-red-500 mb-2" />
              <h3 className="text-xl font-semibold">{topic.title}</h3>
              <p className="text-gray-300">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ending Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <motion.h2 className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          The Future Awaits on Mars 🌌
        </motion.h2>
        <p className="text-gray-300">The journey to Mars is just beginning, and humanity is ready for the challenge.</p>
      </section>
    </div>
  );
};

export default MarsColonization;
