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
    title: "Mobile Banking App",
    description:
      "A secure and responsive mobile banking web app with transaction history and authentication.",
    features: [
      "User Login/Signup",
      "Balance & Transaction View",
      "Responsive UI",
      "Secure Firebase Auth",
      "Minimal UI",
    ],
    techStack: ["React", "Node.js","Tailwind","MongoDB", "Express", "Firebase"],
    liveLink: "https://plant-care-cb6f6.web.app/", 
    frontLink: "https://github.com/nayeem2912/Plant_Care_Client",
    backLink: "https://github.com/nayeem2912/Plant_Care_Server",
    image: "https://i.ibb.co/WWt4YQd6/Screenshot-2025-06-28-133817.png",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-orange-500 transition duration-300 space-y-4"
      data-aos="fade-up"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {project.description}
      </p>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
        {project.features.map((feature, i) => (
          <li key={i}>➤ {feature}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-orange-400 text-black text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <a
          href={project.liveLink}
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
        >
          Live
        </a>
        <a
          href={project.frontLink}
          target="_blank"
          className="bg-gray-800 hover:bg-black text-white text-sm px-3 py-1 rounded"
        >
          Frontend Code
        </a>
        <a
          href={project.backLink}
          target="_blank"
          className="bg-gray-800 hover:bg-black text-white text-sm px-3 py-1 rounded"
        >
          Backend Code
        </a>
        <Link
          to={`/projects/${project.id}`}
          className="bg-orange-500 hover:bg-orange-600 text-black text-sm px-3 py-1 rounded"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-black py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
