import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "AI-powered PDF summarization using Google Gemini API",
      description: "An app built with Next js, TailwindCSS & AWS for a fast, user-friendly experience.",
      image: "/images/project1.png",
      link: "https://nebulapdf.vercel.app/",
      bgColor: "bg-[#FFE7EB]"
    },
    {
      title: "The Sudoku Game",
      description: "A classic Sudoku game built with React and TypeScript",
      image: "/images/project2.png",
      // link: "https://sudoku-game.vercel.app/",
      link: "https://github.com/likhithasri7/Sudoku-Game",
      bgColor: "bg-[#FFEFDB]"
    },
    {
      title: "LIVEFIT",
      description: "A fitness tracking application with workout routines and nutrition plans",
      image: "/images/project3.png",
      link: "https://livefitankitrj3.vercel.app/",
      bgColor: "bg-[#E7EBFF]"
    }
  ];

  return (
    <div className="projects">
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
            <div className="text-content">
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
              <a 
                href={projects[0].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Visit Project
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project, index) => (
              <div 
                key={index} 
                className="project" 
                ref={index === 0 ? libraryRef : ycDirectoryRef}
              >
                <div className={`image-wrapper ${project.bgColor}`}>
                  <img src={project.image} alt={project.title} />
                </div>
                <h2>{project.title}</h2>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  Visit Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppShowcase;
