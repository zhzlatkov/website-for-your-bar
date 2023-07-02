import Image from "@/components/Image";

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
          <a key={category.id} href={category.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={category.imageSrc}
                alt={category.name}
                classNameRoot="h-96 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-1 text-lg font-medium text-gray-900">
              {category.name}
            </h3>
            <p className="mt-4 text-sm text-gray-700">
              {category.shortDescription}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
