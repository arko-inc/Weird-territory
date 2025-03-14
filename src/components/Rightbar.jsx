import { useEffect, useState } from "react";

const Sidebar = ({ onSelectTopic, selectedTopic }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                // Extract unique topics
                const uniqueTopics = [...new Set(data.map(blog => blog.topic))];
                setTopics(uniqueTopics);
            })
            .catch((error) => console.error("Error loading topics:", error));
    }, []);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-60">
            <h2 className="text-lg font-bold text-white mb-3">Filter by Topic</h2>
            <ul>
                <li 
                    className={`cursor-pointer p-2 rounded ${selectedTopic === null ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"}`}
                    onClick={() => onSelectTopic(null)}
                >
                    Show All
                </li>
                {topics.map((topic, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer p-2 rounded ${selectedTopic === topic ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"}`}
                        onClick={() => onSelectTopic(topic)}
                    >
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
