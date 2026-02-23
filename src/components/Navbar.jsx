import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { img } from "../assets/assets";

function Navbar() {
  const { scrollY } = useScroll();
  const widthRaw = useTransform(scrollY, [0, 100], [1000, 700]);
  const width = useSpring(widthRaw, { stiffness: 120, damping: 20 });
  const borderRadiusRaw = useTransform(scrollY, [0, 100], [12, 26]);
  const borderRadius = useSpring(borderRadiusRaw, {
    stiffness: 120,
    damping: 20,
  });
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(34,34,34,0)", "rgba(34,34,34,0.5)"],
  );
  const shadowOpacity = useTransform(scrollY, [0, 60], [0, 0.3]);
  const boxShadow = useTransform(
    shadowOpacity,
    (o) => `0 4px 12px rgba(0,0,0,${o})`,
  );
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const borderBottom = useTransform(
    borderOpacity,
    (o) => `2px solid rgba(255,255,255,${o})`,
  );

  return (
    <>
      <motion.div
        style={{
          width,
          maxWidth: "92vw",
          borderRadius,
          backgroundColor,
          boxShadow,
          borderBottom,
        }}
        className="hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 z-50 
        backdrop-blur-xl items-center px-6 h-16"
      >
        <a href="#home" className="w-12 lg:w-14 absolute left-4 lg:left-6">
          <motion.img
            src={img.logo}
            alt="Logo"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { type: "spring", stiffness: 300, damping: 20 },
            }}
          />
        </a>

        <div
          className="absolute left-1/2 -translate-x-1/2 
        flex gap-6 lg:gap-8 
        text-white/50 font-dmsans font-light nav text-sm lg:text-base"
        >
          <a href="#services" className="nav-link">
            <p>Services</p>
          </a>
          <a href="#aboutme" className="nav-link">
            <p>About Me</p>
          </a>
          <a href="#projects" className="nav-link">
            <p>Projects</p>
          </a>
          <a href="#contact" className="nav-link">
            <p>Contact</p>
          </a>
        </div>

        <div className="absolute right-4 lg:right-6">
          <p
            className="p-2 outline-1 text-white/50 hover:text-white 
          font-dmsans transition-colors duration-300 cursor-pointer text-sm lg:text-base"
          >
            Resume
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
