import { Link } from "react-router";

const PlantCareDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-orange-500 font-bold mb-6">
          Plant Care - 24/7 
        </h2>

        <img
          src="https://i.ibb.co/WWt4YQd6/Screenshot-2025-06-28-133817.png"
          alt="Plant Care Website"
          className="rounded-md mb-6 w-full shadow"
        />

        <p className="mb-6 text-gray-300 leading-relaxed">
          <span className="font-semibold text-orange-400">Plant Care</span> is a modern full-stack web app created to assist home gardeners with intelligent plant care tools and a clean, responsive user interface.
        </p>

        <h3 className="text-xl font-semibold text-orange-400 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold text-orange-400">🌱 Plant Management Dashboard</span> <br />
Manage a collection of plants with images, descriptions, and care details.</li>
          <li><span className="font-semibold text-orange-400">🕒 Smart Watering Reminders</span> <br />
Schedule reminders to water your plants on time and avoid overwatering.</li>
          <li><span className="font-semibold text-orange-400">📋 Plant Care Instructions</span> <br />
View detailed care guidelines for each plant including sunlight, soil, and water needs.</li>
          <li><span className="font-semibold text-orange-400">🧾 Add / Edit / Delete Plants</span> <br />
Perform full CRUD operations on your plant list with a simple and intuitive UI.</li>
          <li><span className="font-semibold text-orange-400">🔍 User-Friendly Interface</span> <br />
Minimalistic design with clean layout for easy plant care tracking.</li>
          
        </ul>

        <h3 className="text-xl font-semibold text-orange-400 mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "Tailwind CSS", "Firebase", "MongoDB", "Express.js"].map((tech, i) => (
            <span
              key={i}
              className="bg-orange-400 text-black text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://plant-care-cb6f6.web.app/"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded"
          >
            🔗 Live Site
          </a>
          <a
            href="https://github.com/nayeem2912/Plant_Care_Client"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded"
          >
            💻 Frontend Code
          </a>
          <a
            href="https://github.com/nayeem2912/Plant_Care_Server"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded"
          >
            💻 Backend Code
          </a>
          <Link to='/'>
          <button
            className="bg-orange-400 text-black  font-medium px-4 py-2 rounded"
          >
            Back to home
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default PlantCareDetails;
