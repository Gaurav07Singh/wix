import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  image: string;
  rotation: string;
}

const ProductCard = ({ title, image, rotation }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center ${rotation}`}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: rotation === "rotate-[-8deg]" ? -12 : 12 }}
        transition={{ duration: 0.4 }}
        className={`relative w-80 h-96 mb-6 overflow-hidden transition-all duration-700 ${
          isVisible ? "blur-effect sharp" : "blur-effect"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-background mb-4"
      >
        {title}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button variant="solid" size="lg">
          SHOP {title}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
