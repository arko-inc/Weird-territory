const BlackHoles = () => {
    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-bold">Black Holes</h1>
            <img src="https://science.nasa.gov/wp-content/uploads/2023/06/blackhole.jpg" 
                 alt="Black Holes" className="w-full h-96 object-cover rounded-lg my-6" />
            <p className="text-lg">
                Black holes are formed when massive stars collapse under their own gravity. The event horizon marks the point of no return where nothing can escape...
            </p>
        </div>
    );
}

export default BlackHoles;
