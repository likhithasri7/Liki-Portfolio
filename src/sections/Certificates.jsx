import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for certificate cards
    gsap.utils.toArray(".certificate-card").forEach((card, index) => {
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
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const certificates = [
    {
      title: " Data Structures and Algorithms - Self Paced [Online Course]",
      issuer: "GeeksforGeeks",
      date: "August 2024",
      description: "Data Structures",
      imgPath: "/images/cert1.png"
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      date: "July - October 2024",
      description: "Introduction to Internet of Things",
      imgPath: "/images/cert2.png"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "August 2023",
      description: "Mastering Data Structures & Algorithms using C a n d C++",
      imgPath: "/images/cert3.png"
    },
    {
      title: "Cloud Computing Basics (Cloud 101)",
      issuer: "Coursera",
      date: "March 2023",
      description: "Cloud computing basics",
      imgPath: "/images/cert4.png"
    }
  ];

  return (
    <section id="certificates" ref={sectionRef} className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Certificates"
          sub="📜 My Achievements"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card flex">
              <GlowCard card={cert}>
                <div className="p-4 flex flex-col h-full min-h-[400px]">
                  <div className="image-wrapper mb-4">
                    <img 
                      src={cert.imgPath} 
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 leading-tight">{cert.title}</h3>
                      <p className="text-white-50 mb-2">🏢 {cert.issuer}</p>
                      <p className="text-white-50 mb-2">🗓️ {cert.date}</p>
                    </div>
                    <p className="text-white-50 mt-auto">{cert.description}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 