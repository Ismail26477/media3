import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          w-full
          h-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PubmGcyQTJyqpl087cA8aeMwY3tT07.png')",
          backgroundColor: "#f5f5f5"
        }}
      />

      {/* Dark Overlay - Removed for clean logo background */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-gray-700
            uppercase
            font-light
            tracking-[0.35em]
            text-xl
            sm:text-3xl
            md:text-5xl
            mt-[-40px]
          "
        >
          Film | Sound | Music
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            to="/work"
            className="
              bg-[#d88345]
              text-black
              uppercase
              tracking-[0.25em]
              text-[11px]
              font-semibold
              px-8
              py-3
              hover:opacity-90
              transition
            "
          >
            View Our Work
          </Link>

          <Link
            to="/contact"
            className="
              border
              border-gray-700
              text-gray-700
              uppercase
              tracking-[0.25em]
              text-[11px]
              font-semibold
              px-8
              py-3
              hover:bg-gray-700
              hover:text-white
              transition
            "
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Explore */}
        <Link
          to="/about"
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            text-gray-600
            hover:text-gray-800
            transition
          "
        >
          <span className="text-[10px] uppercase tracking-[0.4em] mb-2">
            Explore
          </span>

          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </Link>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
