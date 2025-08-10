import React from 'react';
import { Link } from 'react-router';

const SecureLife = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-orange-500 font-bold mb-6">
          SecureLife  
        </h2>

        <img
          src="../../Screenshot 2025-08-10 210153.png"
          alt="SecureLife Website"
          className="rounded-md mb-6 w-full shadow"
        />

        <p className="mb-6 text-gray-300 leading-relaxed">
          <span className="font-semibold text-orange-600">SecureLife</span> is a life insurance management platform with dedicated dashboards for Admin, Agent, and Customer roles. It includes policy management, multi-step forms, Stripe-based payments, blog functionality, and PDF export features.
        </p>

        <h3 className="text-xl font-semibold text-orange-600 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">Role-Based Dashboards – Separate interfaces and permissions for Admin, Agent, and Customer.</span></li>
          <li><span className="font-semibold ">Policy Management – Create, edit, delete, and assign policies to customers.</span> </li>
          <li><span className="font-semibold ">Application Handling – Manage insurance applications, assign agents, and give feedback.</span></li>
          <li><span className="font-semibold ">Stripe Payment Integration – Secure online premium payments.</span> </li>
          <li><span className="font-semibold ">PDF Export – Download policy details as professionally formatted PDFs.</span> </li>
          
        </ul>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">Challenges Faced:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">Managing role-based access control solely with Firebase Authentication.</span></li>
          <li><span className="font-semibold ">Designing complex dashboards with different functionalities for each role.</span> </li>
          <li><span className="font-semibold ">Implementing secure Stripe transactions and PDF generation.</span></li>
          
        </ul>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">Potential Improvements & Future Plans:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
          <li><span className="font-semibold ">Add policy renewal reminders via email/SMS.</span></li>
          <li><span className="font-semibold ">Implement analytics dashboards for Admin.</span> </li>
          <li><span className="font-semibold ">Integrate AI-based insurance recommendations for customers.</span></li>
          
        </ul>

        <h3 className="text-xl font-semibold text-orange-600 mb-2">Tech Stack:</h3>
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
            href="https://secure-life-2912.netlify.app/"
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

export default SecureLife;