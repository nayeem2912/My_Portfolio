import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiNetlify,
  SiDaisyui,
  SiMambaui,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const frontendSkills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-orange-500 text-4xl" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-orange-500 text-4xl" /> },
  { name: "React", level: 80, icon: <FaReact className="text-orange-500 text-4xl" /> },
  { name: "Tailwind", level: 85, icon: <SiTailwindcss className="text-orange-500 text-4xl" /> },
];

const backendSkills = [
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-orange-500 text-4xl" /> },
  { name: "Express.js", level: 75, icon: <SiExpress className="text-orange-500 text-4xl" /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb className="text-orange-500 text-4xl" /> },
  { name: "Firebase", level: 85, icon: <SiFirebase className="text-orange-500 text-4xl" /> },
];

const toolSkills = [
  { name: "Git & GitHub", level: 85, icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
  { name: "VS Code", level: 90, icon: <TbBrandVscode className="text-orange-500 text-4xl" /> },
  { name: "Postman", level: 75, icon: <SiPostman className="text-orange-500 text-4xl" /> },
  { name: "Figma", level: 75, icon: <SiFigma className="text-orange-500 text-4xl" /> },
  { name: "Netlify", level: 80, icon: <SiNetlify className="text-orange-500 text-4xl" /> },
  { name: "DaisyUI", level: 85, icon: <SiDaisyui className="text-orange-500 text-4xl" /> }, 
  { name: "Mamba UI", level: 80, icon: <SiMambaui className="text-orange-500 text-4xl" /> }, 
];

const SkillsCategory = ({ title, skills, delayOffset }) => (
  <div className="mb-14">
    <h3 className="text-2xl font-semibold text-orange-500 mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {skills.map((skill, idx) => (
        <div
          key={skill.name}
          className="bg-gray-900 rounded-xl p-4 flex flex-col items-center justify-center shadow hover:shadow-orange-500 transition duration-300"
          data-aos="zoom-in"
          data-aos-delay={idx * 100 + delayOffset}
        >
          <div className="mb-3">{skill.icon}</div>
          <h4 className="text-lg font-semibold">{skill.name}</h4>
          <p className="text-sm text-orange-400 mt-1">{skill.level}%</p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
          My Skills
        </h2>

        <SkillsCategory title="Frontend" skills={frontendSkills} delayOffset={0} />
        <SkillsCategory title="Backend" skills={backendSkills} delayOffset={500} />
        <SkillsCategory title="Tools" skills={toolSkills} delayOffset={1000} />
      </div>
    </section>
  );
};

export default SkillsSection;
