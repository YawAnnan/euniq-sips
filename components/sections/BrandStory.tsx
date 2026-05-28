export default function BrandStory() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D97706]">
          Official Beverage Partner 
        </p>

        <h2 className="mb-6 text-5xl font-black text-[#556B2F]">
          VIVA Drinks by Euniq Sips
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
          Euniq Sips proudly distributes the premium VIVA Drinks collection —
          a carefully crafted range of refreshing, natural beverages designed
          for modern lifestyle hydration and luxury refreshment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl bg-[#F8F6F1] p-6">
            <h3 className="mb-2 text-xl font-bold text-[#556B2F]">
              Natural Ingredients
            </h3>
            <p className="text-gray-600">
              Crafted from real fruit juice and natural extracts for a clean taste.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F6F1] p-6">
            <h3 className="mb-2 text-xl font-bold text-[#556B2F]">
              Premium Experience
            </h3>
            <p className="text-gray-600">
              Designed for luxury refreshment and modern lifestyle consumers.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F6F1] p-6">
            <h3 className="mb-2 text-xl font-bold text-[#556B2F]">
              Ghana Distribution
            </h3>
            <p className="text-gray-600">
              Delivered across Accra and nationwide through trusted logistics partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}