import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a few seconds (you can replace this with real data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the time for the animation duration

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="stars"></div>
    </div>
  ) : null;
};

export default Loader;
