
const AboutSection = () => {
  return (
    <section id="about" className=" bg-black text-white px-4 py-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="https://i.ibb.co/20Ch7mT9/4884785.jpg"
            alt="Profile"
            className="rounded-xl w-full max-w-md mx-auto border-4 border-orange-500 shadow-lg"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm <span className="text-orange-400 font-semibold">MD Omar Faruk Nayeem</span>, a passionate MERN-Stack web developer with experience in building responsive and interactive websites using modern technologies like React, Node.js, Express, and MongoDB.
          </p>
          <p className="text-base mb-4">
            My journey began with simple HTML and CSS, and now I enjoy working on full MERN stack projects. I love problem-solving and always enjoy learning new tools and frameworks.
          </p>
          <p className="text-base mb-4">
            Outside of coding, I enjoy <span className="italic text-orange-400">football, traveling</span>. I’m always open to collaboration and building cool things together!
          </p>

          {/* Skills */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
