import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
          ? "bg-[#050414] bg-opacity-80 backdrop-blur-xl shadow-2xl border-b border-[#8245ec] border-opacity-20"
          : "bg-transparent"
        }`}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(5, 4, 20, 0.9) 0%, rgba(130, 69, 236, 0.1) 100%)'
          : 'transparent'
      }}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo with 3D effect */}
        {/* Logo with creative effects */}
        <div
          className="relative text-lg font-semibold cursor-pointer group select-none"
          onClick={() => setActiveSection("home")}
        >
          {/* Glow background when clicked */}
          <span
            className={`absolute inset-0 rounded-lg blur-lg transition-all duration-700 
      ${activeSection === "home"
                ? "bg-gradient-to-r from-[#8245ec] via-pink-500 to-purple-600 opacity-40 scale-125"
                : "opacity-0 scale-90"}`
            }
          />

          <div
            className={`relative z-10 flex items-center gap-1 transform transition-all duration-500
      group-hover:scale-110 group-hover:rotate-2
      ${activeSection === "home" ? "animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] via-pink-400 to-purple-600" : ""}
    `}
          >
            {/* Left angle bracket with glow */}
            <span className="text-[#8245ec] drop-shadow-[0_0_10px_rgba(130,69,236,0.6)] 
      transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(130,69,236,1)]">
              &lt;
            </span>

            {/* Sk */}
            <span className="text-white transition-colors duration-500 group-hover:text-gray-200">
              Sk
            </span>

            {/* Slash */}
            <span className="text-[#8245ec] drop-shadow-[0_0_10px_rgba(130,69,236,0.6)] 
      transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(130,69,236,1)]">
              /
            </span>

            {/* Samidul with shimmer effect */}
            <span className="relative text-white group-hover:text-gray-100 transition duration-500">
              <span className="relative z-10">Samidul</span>
              {/* Shimmer overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
        -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </span>

            {/* Right angle bracket */}
            <span className="text-[#8245ec] drop-shadow-[0_0_10px_rgba(130,69,236,0.6)] 
      transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(130,69,236,1)]">
              &gt;
            </span>
          </div>
        </div>


        {/* Desktop Menu with 3D animations */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-300 transform
                  hover:scale-110 hover:-translate-y-1 hover:rotate-1
                  hover:shadow-[0_10px_30px_rgba(130,69,236,0.3)]
                  ${activeSection === item.id
                    ? "text-[#8245ec] scale-105 shadow-[0_5px_15px_rgba(130,69,236,0.4)]"
                    : "text-gray-300 hover:text-white"
                  }
                `}
                style={{
                  background: activeSection === item.id
                    ? 'linear-gradient(135deg, rgba(130, 69, 236, 0.2) 0%, rgba(130, 69, 236, 0.05) 100%)'
                    : 'transparent',
                  border: activeSection === item.id
                    ? '1px solid rgba(130, 69, 236, 0.3)'
                    : '1px solid transparent'
                }}
              >
                {item.label}

                {/* 3D underline effect */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  w-0 h-0.5 bg-gradient-to-r from-[#8245ec] to-purple-400
                  transition-all duration-300 group-hover:w-full
                  shadow-[0_2px_10px_rgba(130,69,236,0.6)]
                `} />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#8245ec] to-purple-400 opacity-10 blur-sm" />
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons with 3D effects */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://leetcode.com/u/Sk_786/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-2 rounded-lg transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_15px_35px_rgba(255,193,7,0.4)]">
              <SiLeetcode
                size={24}
                className="text-gray-300 group-hover:text-yellow-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,193,7,0)] group-hover:drop-shadow-[0_0_20px_rgba(255,193,7,0.6)]"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sk-samidul/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-2 rounded-lg transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_15px_35px_rgba(14,165,233,0.4)]">
              <FaLinkedin
                size={24}
                className="text-gray-300 group-hover:text-blue-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0)] group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,0.6)]"
              />
            </div>
          </a>
          <a
            href="https://github.com/SamidulSk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="p-2 rounded-lg transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_15px_35px_rgba(168,85,247,0.4)]">
              <FaGithub
                size={24}
                className="text-gray-300 group-hover:text-purple-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
              />
            </div>
          </a>
        </div>

        {/* Mobile Menu Icon with 3D effect */}
        <div className="md:hidden relative">
          <div className="group cursor-pointer">
            {isOpen ? (
              <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-180">
                <FiX
                  className="text-3xl text-[#8245ec] drop-shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:drop-shadow-[0_0_25px_rgba(130,69,236,0.8)]"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            ) : (
              <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                <FiMenu
                  className="text-3xl text-[#8245ec] drop-shadow-[0_0_15px_rgba(130,69,236,0.6)] hover:drop-shadow-[0_0_25px_rgba(130,69,236,0.8)]"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu with enhanced 3D animations */}
      {isOpen && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 rounded-xl shadow-2xl md:hidden animate-[slideDown_0.3s_ease-out] z-50"
          style={{
            background: 'linear-gradient(135deg, rgba(5, 4, 20, 0.95) 0%, rgba(130, 69, 236, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(130, 69, 236, 0.2)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(130, 69, 236, 0.2)'
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className="w-full px-4 group animate-[fadeInUp_0.3s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    w-full py-3 px-4 rounded-lg transition-all duration-300 transform
                    hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(130,69,236,0.3)]
                    ${activeSection === item.id
                      ? "text-[#8245ec] scale-105 shadow-[0_5px_15px_rgba(130,69,236,0.4)]"
                      : "text-gray-300 hover:text-white"
                    }
                  `}
                  style={{
                    background: activeSection === item.id
                      ? 'linear-gradient(135deg, rgba(130, 69, 236, 0.2) 0%, rgba(130, 69, 236, 0.05) 100%)'
                      : 'transparent',
                    border: activeSection === item.id
                      ? '1px solid rgba(130, 69, 236, 0.3)'
                      : '1px solid transparent'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile social icons */}
            <div className="flex space-x-6 pt-4 animate-[fadeInUp_0.3s_ease-out]" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://leetcode.com/u/Sk_786/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(255,193,7,0.4)]">
                  <SiLeetcode
                    size={24}
                    className="text-gray-300 group-hover:text-yellow-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,193,7,0)] group-hover:drop-shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sk-samidul/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(14,165,233,0.4)]">
                  <FaLinkedin
                    size={24}
                    className="text-gray-300 group-hover:text-blue-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0)] group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,0.6)]"
                  />
                </div>
              </a>
              <a
                href="https://github.com/SamidulSk"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg transition-all duration-500 transform group-hover:scale-150 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(236,72,153,0.6)]">
                  <FaGithub
                    size={24}
                    className="text-gray-300 group-hover:text-pink-300 transition-all duration-500 drop-shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] group-hover:animate-pulse"
                  />
                </div>
              </a>
            </div>
          </ul>
        </div>
      )}

      {/* Custom CSS animations with 3D transforms */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px) scale(0.95) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1) rotateX(0deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .rotate-y-12:hover {
          transform: rotateY(12deg);
        }

        .translateZ-8 {
          transform: translateZ(8px);
        }

        .translateZ-4 {
          transform: translateZ(4px);
        }

        .translateZ-2 {
          transform: translateZ(2px);
        }

        .text-shadow-\[2px_2px_4px_rgba\(0\,0\,0\,0\.5\)\] {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .group:hover .text-shadow-\[4px_4px_8px_rgba\(245\,158\,11\,0\.3\)\] {
          text-shadow: 4px 4px 8px rgba(245,158,11,0.3);
        }

        .group:hover .text-shadow-\[3px_3px_6px_rgba\(245\,158\,11\,0\.4\)\] {
          text-shadow: 3px 3px 6px rgba(245,158,11,0.4);
        }

        .group:hover .text-shadow-\[3px_3px_6px_rgba\(249\,115\,22\,0\.4\)\] {
          text-shadow: 3px 3px 6px rgba(249,115,22,0.4);
        }

        .group:hover .text-shadow-\[2px_2px_6px_rgba\(249\,115\,22\,0\.4\)\] {
          text-shadow: 2px 2px 6px rgba(249,115,22,0.4);
        }

        .group:hover .text-shadow-\[2px_2px_6px_rgba\(234\,179\,8\,0\.4\)\] {
          text-shadow: 2px 2px 6px rgba(234,179,8,0.4);
        }

        .group:hover .text-shadow-\[3px_3px_6px_rgba\(239\,68\,68\,0\.4\)\] {
          text-shadow: 3px 3px 6px rgba(239,68,68,0.4);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;