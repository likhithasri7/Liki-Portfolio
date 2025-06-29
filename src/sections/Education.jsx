import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".eduText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  const educationCards = [
    {
      title: "BTech in Computer Science and Engineering",
      university: "Lovely Professional University",
      location: "Punjab, India",
      date: "Expected Graduation: May 2026",
      cgpa: "7.3",
      imgPath: "/images/education.png",
      logoPath: "/lpulogo.jpg"
    },
    {
      title: "Diploma in Computer Science and Engineering",
      university: "Lovely Professional University",
      location: "Punjab, India",
      date: "Graduated: May 2023",
      cgpa: "7.8",
      imgPath: "/images/education.png",
      logoPath: "/lpulogo.jpg"
    }
  ];

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education"
          sub="🎓 My Academic Journey"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {educationCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper flex items-start">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="flex items-center justify-center p-4">
                      <img 
                        src={card.logoPath} 
                        alt="university-logo" 
                        className="w-32 h-32 object-contain bg-white rounded-lg p-4"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="eduText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img 
                          src={card.logoPath} 
                          alt="logo" 
                          className="w-16 h-16 object-contain bg-white rounded-full p-2"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-3 text-white-50">
                          🏛️&nbsp;{card.university}
                        </p>
                        <p className="my-3 text-white-50">
                          📍&nbsp;{card.location}
                        </p>
                        <p className="my-3 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="my-3 text-white-50">
                          📊&nbsp;CGPA: {card.cgpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
