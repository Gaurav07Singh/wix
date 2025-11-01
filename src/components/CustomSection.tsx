import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import customMadeHero from "@/assets/custom-made-hero.jpg";
import productGrid1 from "@/assets/product-grid-1.jpg";
import productGrid2 from "@/assets/product-grid-2.jpg";
import productGrid3 from "@/assets/product-grid-3.jpg";
import productGrid4 from "@/assets/product-grid-4.jpg";

const CustomSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gridRef.current) {
      const images = gridRef.current.querySelectorAll(".grid-image");
      images.forEach((img) => observer.observe(img));
    }

    return () => observer.disconnect();
  }, []);

  const gridImages = [productGrid1, productGrid2, productGrid3, productGrid4];

  return (
    <section ref={sectionRef} className="bg-background min-h-screen">
      <div className="container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <motion.div
            style={{ y: imageY }}
            className="relative flex flex-col justify-center"
          >
            <div className="relative h-[600px] overflow-hidden">
              <motion.img
                src={customMadeHero}
                alt="Custom made fashion"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-12">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-foreground mb-6"
                >
                  CUSTOM MADE<br />FOR YOUR SPACE
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button variant="neon" size="lg" className="w-fit">
                    SHOP COLLECTION
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 gap-4"
          >
            {gridImages.map((img, index) => (
              <motion.div
                key={index}
                data-index={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid-image aspect-square overflow-hidden transition-all duration-700 ${
                  visibleImages.includes(index) ? "blur-effect sharp" : "blur-effect"
                }`}
              >
                <motion.img
                  src={img}
                  alt={`Product ${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
