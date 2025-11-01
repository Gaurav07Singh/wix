import ProductCard from "./ProductCard";
import sunglassesVenessa from "@/assets/sunglasses-venessa.jpg";
import sunglassesVictoria from "@/assets/sunglasses-victoria.jpg";

const ProductSection = () => {
  return (
    <section className="bg-neon py-20 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <ProductCard
            title="VENESSA"
            image={sunglassesVenessa}
            rotation="rotate-[-8deg]"
          />
          <ProductCard
            title="VICTORIA"
            image={sunglassesVictoria}
            rotation="rotate-[8deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
