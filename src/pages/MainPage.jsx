import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { img, services, icons } from "../assets/assets";
import Links from "../components/Links";

function MainPage() {
  const TypewriterText = ({
    texts,
    longestText,
    typingSpeed = 100,
    pause = 1500,
  }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentText = texts[currentTextIndex];

      let timeout;
      if (!isDeleting && displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (isDeleting && displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed / 2);
      } else {
        timeout = setTimeout(() => {
          if (!isDeleting) {
            setIsDeleting(true);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }, pause);
      }

      return () => clearTimeout(timeout);
    }, [
      displayedText,
      isDeleting,
      currentTextIndex,
      texts,
      typingSpeed,
      pause,
    ]);

    return (
      <span
        style={{ minWidth: `${longestText}ch` }}
        className="inline-flex items-baseline gap-1 font-bold h-full
             bg-linear-to-l
             from-[#A855F7]
             via-[#D946EF]
             to-[#EC4899]
             bg-clip-text text-transparent"
      >
        {displayedText}
        <span className="bg-gray-500 w-0.5 h-[0.75em] inline-block animate-pulse" />
      </span>
    );
  };

  const texts = ["E-shop   ", "Portfolio", "Blog     ", "App      "];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <section
        id="home"
        className="h-screen w-full text-center px-6 md:px-20 py-10"
      >
        <div className="flex flex-col font-dmsans w-full h-full justify-center items-center gap-5">
          <div className="relative flex justify-center items-center">
            {/* Glow Behind */}
            <div className="absolute w-80 h-80 bg-purple-500/30 blur-3xl rounded-full" />

            {/* Astronaut */}
            <motion.img
              src={img.astro}
              alt="Astronaut"
              className="relative w-60 sm:w-72 select-none pointer-events-none"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.h1
            className="max-w-3xl px-4 mx-auto text-center text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-semibold select-none"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/70">
              Hey, I'm{" "}
              <span className="font-bold bg-linear-to-t from-[#A855F7] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent">
                Viet Ho
              </span>{" "}
              Junior{" "}
            </span>
            <span className="font-bold">Frontend Developer</span>{" "}
            <span className="text-white/70">
              and I can help you build your{" "}
            </span>
            <span
              style={{ minWidth: "4.5em" }}
              className="inline-block text-left  align-baseline"
            >
              <TypewriterText texts={texts} />
            </span>
          </motion.h1>
          <p className="text-md max-sm:text-sm uppercase font-lexend font-bold text-white/70">
            Based in Prague, Czech Republic 🇨🇿
          </p>
          <Links />

          <motion.a
            href="#contact"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative mt-4 inline-flex overflow-visible"
          >
            <motion.span
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="pointer-events-none w-45 absolute -inset-2 rounded-xl blur-xl"
              style={{
                background:
                  "radial-gradient(circle at center, #A855F7, #D946EF, #EC4899)",
              }}
            />
          </motion.a>
        </div>
        <div className="w-full flex justify-center items-center">
          <a href="#services">
            <icons.chevronDown className="animate-pulse text-white w-15 h-15 relative bottom-10 hover:animate-none hover:scale-145 transition-all duration-300" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full min-h-screen px-4 sm:px-6 md:px-20 text-black bg-white flex flex-col"
      >
        {/* Heading */}
        <div className="w-full flex flex-col text-center items-center font-dmsans gap-4 md:gap-5 relative top-16 md:top-30">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-shadow-lg">
            <span
              className="bg-linear-to-l
             from-[#A855F7]
             via-[#D946EF]
             to-[#EC4899]
             bg-clip-text text-transparent"
            >
              Web Designs
            </span>{" "}
            Tailored to Your Needs
          </h1>
          <p className="max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg px-2 font-light">
            I deliver everything from design and development to maintenance and
            continuous support, ensuring your online presence grows with you.
          </p>
          <button className="rounded-xl shadow-xl/30 mt-3 px-5 py-3 sm:px-6 sm:py-4 bg-black text-white hover:bg-white hover:outline hover:text-black hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Build My Website
          </button>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center mt-40 pb-20 px-2 sm:px-6">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative w-full max-w-105 h-75 sm:h-100 lg:h-120 rounded-lg overflow-hidden shadow-xl/50 transition-all transform duration-500  hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/80"></div>

                  <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center gap-2 sm:gap-3 px-3 sm:px-4 font-dmsans">
                    {service.card.icon && (
                      <img
                        src={service.card.icon}
                        alt={service.card.header}
                        className="size-12 sm:w-20 sm:h-20 mb-4 sm:mb-10 invert brightness-0"
                      />
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-shadow-lg/50">
                      {service.card.header}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base mb-2 sm:mb-4">
                      {service.card.description}
                    </p>
                    <button className="outline outline-white text-white text-xs sm:text-sm px-5 sm:px-4 py-1 sm:py-2 rounded uppercase font-light hover:scale-105 hover:bg-white hover:text-black transition-all duration-300">
                      {service.card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="aboutme"
        className="min-h-screen flex justify-center items-center bg-[#1A1A1A] px-6"
      >
        <div className="w-full max-w-3/4 bg-white/5 rounded-3xl p-20 shadow-2xl border border-white/10">
          {/* Title */}
          <h1 className="font-dmsans text-6xl md:text-8xl font-bold text-shadow-lg text-white mb-16">
            About{" "}
            <span
              className="bg-linear-to-l
             from-[#A855F7]
             via-[#D946EF]
             to-[#EC4899]
             bg-clip-text text-transparent"
            >
              Me
            </span>
          </h1>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={img.profile}
                alt="profile"
                className="w-100 h-100 object-cover rounded-2xl shadow-xl border border-white/10"
              />
              <div></div>
            </div>

            {/* Text */}
            <div className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                qui exercitationem fugiat voluptas eum atque harum ullam, sequi
                repellendus aspernatur.
              </p>

              <p>
                Dicta asperiores nam illo quos ad assumenda, corporis odit a.
                Passionate about building clean UI, smooth interactions, and
                meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex justify-center items-center"
      >
        <h2 className="text-3xl font-bold text-white">Services</h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex justify-center items-center"
      >
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </section>
    </div>
  );
}

export default MainPage;
