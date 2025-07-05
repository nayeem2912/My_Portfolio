const educationData = [
  {
    degree: "Bachelor of Science",
    institution: "National University (2nd Year)",
    year: "2023 - Present",
    details:
      "Currently pursuing B.Sc under the National University.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Comilla Govt City College, Comilla.",
    year: "2022",
    details:
      "Completed HSC from Science group with GPA 5.00.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Comilla Modern High School, Comilla.",
    year: "2020",
    details:
      "Achieved GPA 5.00. Strong foundation in mathematics, general science.",
  },
];

const EducationCard = ({ edu }) => (
  <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-orange-500 transition duration-300 space-y-3">
    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
    <p className="text-lg text-orange-400 font-medium">{edu.institution}</p>
    <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
      {edu.year}
    </span>
    <p className="text-sm text-gray-300 leading-relaxed">{edu.details}</p>
  </div>
);

const EducationSection = () => {
  return (
    <section id="education" className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
          Educational Qualification
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
