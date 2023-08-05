import Image from "@/components/Image";
import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <section
      aria-labelledby="categories-heading"
      className="mx-auto max-w-2xl px-4 sm:px-6 pt-16 pb-12 lg:max-w-6xl lg:px-8"
    >
      <h2 id="categories-heading" className="sr-only">
        Categories
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.name}`}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-pirateGold-400 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={category.image}
                alt={category.name}
                classNameRoot="h-72 w-full object-cover object-center group-hover:opacity-75 lg:h-96"
                classNameImage="object-cover"
              />
            </div>
            <h3 className="mt-1 text-lg font-medium text-pirateGold-200">
              {category.name}
            </h3>
            <p className="mt-4 text-sm text-pirateGold-400">
              {category.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
