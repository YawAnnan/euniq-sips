import Image from "next/image";
import Link from "next/link";

type ShowcaseCardProps = {
  name: string;
  image: string;
  description: string;
};

export default function ShowcaseCard({
  name,
  image,
  description,
}: ShowcaseCardProps) {
  return (
    <div className="overflow-hidden rounded-[30px] bg-white shadow-lg">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-[#556B2F]">
          {name}
        </h3>

        <p className="mb-6 text-gray-600">
          {description}
        </p>

        <Link
          href="/order"
          className="inline-block rounded-full bg-[#D97706] px-5 py-3 font-semibold text-white transition hover:scale-105"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}