import React from 'react';
import { Link } from 'react-router';

const EnglishJanala = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-orange-500 font-bold mb-6">
          English Janala 
        </h2>

        <img
          src="https://i.ibb.co/tMMj80dQ/Screenshot-2025-06-28-210105.png"
          alt="Plant Care Website"
          className="rounded-md mb-6 w-full shadow"
        />

        <p className="mb-6 text-gray-300 leading-relaxed">
          <span className="font-semibold text-orange-400">English Janala</span> is An interactive bilingual platform that helps Bengali speakers learn English vocabulary and programming basics with clear examples and simple explanations. Perfect for students and self-learners seeking easy and effective study.
        </p>

        <h3 className="text-xl font-semibold text-orange-400 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li className='font-semibold'>Bilingual lessons to learn English vocabulary with meanings and examples.</li>
          <li className='font-semibold'>Simple explanations of common programming concepts and FAQs.</li>
          <li className='font-semibold'>Interactive and user-friendly interface for effective learning.</li>
          
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
            href="https://nayeem-assignment-6.netlify.app/"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded"
          >
            🔗 Live Site
          </a>
          <a
            href="https://github.com/nayeem2912/English_Janala"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded"
          >
            💻 Frontend Code
          </a>
          <a
            href=""
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

export default EnglishJanala;