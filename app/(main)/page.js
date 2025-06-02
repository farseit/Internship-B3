import Hero from "@/components/Hero/Hero";
import BrandedProducts from "@/components/Product/BrandedProducts";
import FeatureProducts from "@/components/Product/FeatureProducts";
import ProductContainer from "@/components/Product/ProductContainer";

export default function Home() {
  return (
    <main className="bg-[#f5f6fa]">
      <Hero />
      <FeatureProducts />
      <ProductContainer />
      <BrandedProducts />
    </main>
  );
}
