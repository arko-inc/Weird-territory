import React, { useEffect, useState } from 'react';

const Leftbar = () => {
    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        fetch('/Blog.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                const validBlogs = data.filter(blog => blog.Top !== undefined && blog.Top !== null);
                
                if (validBlogs.length === 0) {
                    console.error('No valid blogs found with Top value.');
                    return;
                }

                // Sort blogs in descending order of "Top" value
                const sortedBlogs = validBlogs.sort((a, b) => b.Top - a.Top);
                
                // Select the top 3 blogs
                setTopBlogs(sortedBlogs.slice(0, 5));
            })
            .catch(error => console.error('Error fetching the blog data:', error));
    }, []);

    if (topBlogs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='fixed w-2/12'>
            <h1 className='text-3xl pb-10 text-emerald-400 font-thin'><span className='text-7xl'>Top</span><br /> Blogs for you</h1>
            {topBlogs.map(blog => (
                <div key={blog.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div>
                        <img 
                            src={blog.img} 
                            alt={blog.title} 
                            style={{ width: '100px', height: 'auto', borderRadius: '8px', marginLeft: '10px' }} 
                            onError={(e) => e.target.style.display = 'none'} // Hide broken images
                        />
                    </div>
                    <div className='pl-3' style={{ marginRight: '15px', flex: 1 }}>
                        <h3 className='text-lg'>{blog.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leftbar;
