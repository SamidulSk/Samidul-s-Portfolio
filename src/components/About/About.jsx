import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/sk_image.png";

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      className="py-2 px-[4vw] md:px-[4vw] lg:px-[15vw] font-sans mt-12 md:mt-20 lg:mt-22 relative"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name with animated gradient shimmer */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight 
                       bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 
                       bg-clip-text text-transparent animate-[textGradient_4s_linear_infinite]"
          >
            Sk Samidul Hossain
          </h2>

          {/* Skills Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "MERN Stack Developer",
                "Java Programmer",
                "Tech Explorer",
                "Problem Solver",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a B.Tech graduate in Computer Science & Engineering with
            proficiency in Java and full-stack development (MERN). Skilled in
            building scalable web applications and solving complex problems
            with data structures and algorithms, I focus on delivering efficient
            solutions and seamless user experiences.
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1Tv-Go9QRaUKLM6MX75yb_1FVgo3eekWK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #8245ec" }}
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 10px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side with Tilt + Cursor hover glow */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full 
                       border-4 border-purple-700 relative transition-all duration-300"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={hovered ? 1.1 : 1.05}
            transitionSpeed={1000}
            gyroscope={true}
            onEnter={() => setHovered(true)}
            onLeave={() => setHovered(false)}
          >
            <img
              src={profileImage}
              alt="Sk Samidul Hossain"
              className={`w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] 
                         ${hovered ? "ring-4 ring-purple-500 shadow-2xl" : ""}`}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
