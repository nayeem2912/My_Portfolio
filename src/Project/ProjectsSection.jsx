import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Plant Care",
    description:
      "Plant Care is a modern full-stack web app created to assist home gardeners with intelligent plant care tools and a clean, responsive user interface.",
    features: [
      "Personalized Plant Care Tips",
      "Scheduled Task Management",
      "Watering & Care Reminders",
      "Plant Journal & Progress Tracking",
      "Community & Care Sharing",
    ],
    techStack: ["React", "Tailwind", "Firebase", "MongoDB", "Express.js"],
    liveLink: "https://plant-care-cb6f6.web.app/", 
    frontLink: "https://github.com/nayeem2912/Plant_Care_Client",
    backLink: "https://github.com/nayeem2912/Plant_Care_Server",
    image: "https://i.ibb.co/WWt4YQd6/Screenshot-2025-06-28-133817.png",
  },
  {
    id: 2,
    title: "Travel Mania",
    description:
      "Travel Mania is a full-stack tour package booking portal built with the MERN Stack and integrated with Firebase Authentication. It allows users to explore travel destinations, view detailed itineraries, and book their ideal trips in real-time.",
    features: [
      " Explore Tour Packages with high-quality visuals and summaries",
      "View Detailed Itineraries for each package",
      "Confirm Bookings with real-time feedback",
      "Responsive Design for mobile and desktop users",
      "Secure Backend APIs",
    ],
    techStack: ["React", "Node.js","Tailwind","MongoDB", "Express", "Firebase"],
    liveLink: "https://travel-mania-nayeem129.netlify.app/", 
    frontLink: "https://github.com/nayeem2912/Travel_Mania_Client",
    backLink: "https://github.com/nayeem2912/Travel_Mania_Server",
    image: "https://i.ibb.co/d0YBKFPQ/Screenshot-2025-06-28-140941.png",
  },
  {
    id: 3,
    title: "English Janala",
    description:
      "An interactive bilingual platform that helps Bengali speakers learn English vocabulary and programming basics with clear examples and simple explanations. Perfect for students and self-learners seeking easy and effective study.",
    features: [
      "Bilingual lessons to learn English vocabulary with meanings and examples.",
      "Simple explanations of common programming concepts and FAQs.",
      "Interactive and user-friendly interface for effective learning.",
    ],
    techStack: ["JavaScript (Vanilla JS)", "HTML5", "CSS3"],
    liveLink: "https://nayeem-assignment-6.netlify.app/", 
    frontLink: "https://github.com/nayeem2912/English_Janala",
    image: "https://i.ibb.co/tMMj80dQ/Screenshot-2025-06-28-210105.png",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-orange-500 transition duration-300 max-w-5xl mx-auto mb-12"
      data-aos="fade-up"
    >
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Image Section */}
        <img
          src={project.image}
          alt={project.title}
           className="w-full md:w-3/5 h-96 object-cover rounded-lg"
        />

        {/* Details Section */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-4 text-white">
          <h3 className="text-2xl font-bold text-orange-500">{project.title}</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          <ul className="list-disc list-inside text-gray-300 space-y-1 max-h-36 overflow-auto text-sm">
            {project.features.map((feature, i) => (
              <li key={i}>➤ {feature}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-orange-400 text-black text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
            >
              Live
            </a>
            <a
              href={project.frontLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-black text-white text-sm px-4 py-2 rounded"
            >
              Frontend Code
            </a>
            <a
              href={project.backLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-black text-white text-sm px-4 py-2 rounded"
            >
              Backend Code
            </a>
            <Link
              to={`/projects/${project.id}`}
              className="bg-orange-500 hover:bg-orange-600 text-black text-sm px-4 py-2 rounded"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-black py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
          Projects
        </h2>
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

