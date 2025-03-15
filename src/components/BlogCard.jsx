import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-xl">{blog.title}</h3>
                <p className="text-gray-400 mt-2">{blog.description}</p>
                <Link
                    to={blog.pageLink}
                    className="text-blue-500 mt-4 inline-block"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
