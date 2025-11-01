import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductSection from "@/components/ProductSection";
import CustomSection from "@/components/CustomSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      {showContent && (
        <main className="overflow-x-hidden">
          <Hero />
          <Marquee />
          <ProductSection />
          <CustomSection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
