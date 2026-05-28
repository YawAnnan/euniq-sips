import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </main>
  );
}