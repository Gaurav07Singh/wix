import { useRef } from "react";
import { ShoppingCart, User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroPortrait1 from "@/assets/hero-portrait-1.jpg";
import heroTexture1 from "@/assets/hero-texture-1.jpg";
import heroPortrait2 from "@/assets/hero-portrait-2.jpg";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-12, -25]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [6, 20]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [12, 25]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background grid-overlay">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-neon">VIBE</div>
        <div className="flex items-center gap-6">
          <button className="text-foreground hover:text-primary transition-colors">
            <User size={24} />
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            <ShoppingCart size={24} />
          </button>
        </div>
      </header>

      {/* Parallax Images */}
      <div ref={parallaxRef} className="relative h-screen flex items-center justify-center">
        <motion.img
          src={heroPortrait1}
          alt="Fashion portrait"
          style={{ y: y1, rotate: rotate1 }}
          className="absolute w-64 h-80 object-cover left-[10%] top-[20%] shadow-2xl"
        />
        <motion.img
          src={heroTexture1}
          alt="Sunglasses texture"
          style={{ y: y2, rotate: rotate2 }}
          className="absolute w-56 h-56 object-cover right-[15%] top-[15%] shadow-2xl"
        />
        <motion.img
          src={heroPortrait2}
          alt="Fashion model"
          style={{ y: y3, rotate: rotate3 }}
          className="absolute w-64 h-80 object-cover right-[20%] bottom-[15%] shadow-2xl"
        />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center"
        >
          <h1 className="text-neon text-8xl font-bold">
            FEEL THE VIBE
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
