import { useEffect, useState } from "react";
import { Filter, List } from "lucide-react"; 

const Sidebar = ({ onSelectTopic, selectedTopic }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("/Blog.json")
            .then((response) => response.json())
            .then((data) => {
                const uniqueTopics = [...new Set(data.map(blog => blog.topic))];
                setTopics(uniqueTopics);
            })
            .catch((error) => console.error("Error loading topics:", error));
    }, []);

    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-60 fixed font-thin">
            {/* Sidebar Header */}
            <div className="flex items-center gap-2 mb-3">
                <Filter size={20} className="text-rose-500" />
                <h2 className="text-2xl font-thin text-white">Filter by Topic</h2>
            </div>

            <ul>
                <li 
                    className={`cursor-pointer p-2 rounded flex items-center gap-2 ${selectedTopic === null ? "bg-rose-500 text-white" : "text-gray-300 hover:bg-gray-700"}`}
                    onClick={() => onSelectTopic(null)}
                >
                    <List size={16} />
                    Show All
                </li>
                {topics.map((topic, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer p-2 rounded flex items-center gap-2 ${selectedTopic === topic ? "bg-rose-500 text-white" : "text-gray-300 hover:bg-gray-700"}`}
                        onClick={() => onSelectTopic(topic)}
                    >
                        <List size={16} />
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
