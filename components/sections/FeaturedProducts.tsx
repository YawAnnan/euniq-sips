import ProductCard from "../ui/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#F8F6F1] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D97706]">
            Signature Collection
          </p>

          <h2 className="mb-6 text-5xl font-black text-[#556B2F]">
            Featured Products
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our curated selection of premium beverages, crafted for luxury refreshment and modern lifestyle hydration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}