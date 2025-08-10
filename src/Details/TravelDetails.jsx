import React from 'react';
import { Link } from 'react-router';

const TravelDetails = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-orange-500 font-bold mb-6">
          Travel Mania  
        </h2>

        <img
          src="https://i.ibb.co/d0YBKFPQ/Screenshot-2025-06-28-140941.png"
          alt="Travel Mania Website"
          className="rounded-md mb-6 w-full shadow"
        />

        <p className="mb-6 text-gray-300 leading-relaxed">
          <span className="font-semibold text-orange-500">Travel Mania</span> is a full-stack tour package booking portal built with the MERN Stack and integrated with Firebase Authentication. It allows users to explore travel destinations, view detailed itineraries, and book their ideal trips in real-time.
        </p>

        <h3 className="text-xl font-semibold text-orange-500 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">🧳 Explore Tour Packages with high-quality visuals and summaries</span></li>
          <li><span className="font-semibold ">📅 View Detailed Itineraries for each package</span> </li>
          <li><span className="font-semibold ">✅ Confirm Bookings with real-time feedback</span></li>
          <li><span className="font-semibold ">🧾 Add / Edit / Delete travel package</span> </li>
          <li><span className="font-semibold ">🔍 User-Friendly Interface</span> </li>
          
        </ul>

         <h3 className="text-xl font-semibold text-orange-500 mb-2">Challenges Faced:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">Handling real-time search and sorting for packages efficiently.</span></li>
          <li><span className="font-semibold ">Designing a blog section that’s visually appealing and easy to navigate.</span> </li>
          <li><span className="font-semibold ">Ensuring a consistent user experience across multiple devices.</span></li>
          
        </ul>

        <h3 className="text-xl font-semibold text-orange-500 mb-2">Potential Improvements & Future Plans:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">Integrate payment gateways for direct booking.</span></li>
          <li><span className="font-semibold ">Add a user dashboard for tracking bookings.</span> </li>
          <li><span className="font-semibold ">Implement live chat support for instant customer queries.</span></li>
          
        </ul>

        <h3 className="text-xl font-semibold text-orange-500 mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "Tailwind CSS", "Firebase", "MongoDB", "Express.js"].map((tech, i) => (
            <span
              key={i}
              className="bg-orange-600 text-black text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://travel-mania-nayeem129.netlify.app/"
            target="_blank"
            className="bg-orange-600 text-black font-medium px-4 py-2 rounded"
          >
            🔗 Live Site
          </a>
        
          <Link to='/'>
          <button
            className="bg-orange-600 text-black  font-medium px-4 py-2 rounded"
          >
            Back to home
          </button>
          </Link>
          
        </div>
      </div>
    </div>
    );
};

export default TravelDetails;