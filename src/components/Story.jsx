import React, { useState, useEffect } from 'react';

const Story = ({ width = 'md:w-full w-72', height = 'md:h-96 h-48' }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);

  // Fetch data from Blog.json and filter blogs with carouselState === true
  useEffect(() => {
    fetch('/Blog.json')
      .then((response) => response.json())
      .then((data) => {
        const carouselBlogs = data.filter(blog => blog.carouselState);
        setBlogs(carouselBlogs);
      })
      .catch((error) => console.error('Error loading blog data:', error));
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (blogs.length === 0) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentStory((prevStory) => (prevStory + 1) % blogs.length);
          return 0; // Reset progress after completing a story
        }
        return prevProgress + 1; // Increment progress smoothly
      });
    }, 4000 / 100); // Update progress every 40ms (100 updates over 4 seconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount or dependency change
  }, [currentStory, blogs]);

  // Reset progress when the current story changes
  useEffect(() => {
    setProgress(0);
  }, [currentStory]);

  const goToPreviousStory = () => {
    setProgress(0); // Reset progress
    setCurrentStory((prevStory) =>
      prevStory === 0 ? blogs.length - 1 : prevStory - 1
    );
  };

  const goToNextStory = () => {
    setProgress(0); // Reset progress
    setCurrentStory((prevStory) => (prevStory + 1) % blogs.length);
  };

  if (blogs.length === 0) return null; // Don't render if no blogs are available

  return (
    <div className={`relative ${width} mx-auto`}>
      <div className="relative">
        {/* Display the current blog image */}
        <img
          src={blogs[currentStory].img}
          alt={blogs[currentStory].title}
          className={`${width} ${height} object-cover rounded-3xl transition-all duration-500`}
        />

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full flex space-x-1 p-2">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="flex-1 h-[2.5px] bg-gray-400 rounded-full relative">
              {currentStory === index && (
                <div
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
              {currentStory > index && (
                <div className="absolute top-0 left-0 h-full bg-white rounded-full w-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={goToPreviousStory}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            onClick={goToNextStory}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Blog Title and Description */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl">
          <h2 className="text-xl font-bold text-white">{blogs[currentStory].title}</h2>
          <p className="text-gray-300">{blogs[currentStory].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;