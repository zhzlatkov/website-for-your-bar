import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "./Image";
import Link from "next/link";

const product = {
  category: {
    id: 2,
    name: "coctails",
    link: "/category/coctails",
  },
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta dolorem fugiat minima ex id, maxime rerum doloribus nemo voluptates quas aspernatur ut adipisci molestias quo ipsam cupiditate possimus eos, voluptas expedita eaque qui nam. Quod hic dolores at nisi, odio inventore illo dolor soluta quae temporibus voluptatibus, cumque doloribus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, repudiandae? Provident tempora et quod minus, commodi adipisci vero totam voluptates, consectetur mollitia, minima porro cum voluptatem saepe at distinctio. Cupiditate sunt aliquam expedita vel consequuntur tenetur temporibus minus sint doloribus ad, quasi obcaecati accusantium? Pariatur perferendis quod veniam autem assumenda ipsam aspernatur nobis illo voluptatibus cupiditate possimus provident perspiciatis excepturi, inventore molestias maxime. Ullam laudantium praesentium numquam assumenda odio! Eos reiciendis esse quo, id alias suscipit commodi sapiente voluptate maxime eligendi incidunt, aperiam sunt ab, itaque repellendus voluptates tempora accusamus? Nobis in officiis impedit recusandae non numquam odio saepe nam.",
  imageSrc:
    "https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327_1280.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
  size: 19,
  sizeQuantity: "ml",
  availability: true,
};

export default function ProductComponent({ products }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:flex lg:max-w-6xl lg:px-8">
        <div className="mx-auto mt-2 flex max-w-6xl flex-col items-center gap-x-8 gap-y-4 px-6 sm:gap-y-8 md:px-8 lg:flex-row lg:items-stretch">
          <div className="h-96 w-full max-w-2xl md:w-96 lg:h-auto max-h-[65%] flex-none">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              classNameRoot="h-full xl:mx-0"
              classNameImage="inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top border-yellow-400 border-8"
            />
          </div>
        </div>
        <div className="m-auto">
          <div className="text-center mt-2 lg:text-left lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <Link
                href={product.category.link}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {product.category.name.toUpperCase()}
                {" / "}
              </Link>
              <Link
                href={product.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {product.name.toUpperCase()}
              </Link>
            </nav>

            <div className="mt-4">
              <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p>
                <div className="ml-4 border-l flex border-gray-300">
                  <p className="ml-2 text-sm text-gray-500">
                    {product.size} {product.sizeQuantity}
                  </p>
                  {product.availability ? (
                    <>
                      <CheckIcon
                        className="ml-4 h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-gray-500">
                        Available for ordering
                      </p>
                    </>
                  ) : (
                    <>
                      <XMarkIcon
                        className="ml-4 h-5 w-5 flex-shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-gray-500">
                        Unavailable for ordering
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-4 space-y-6">
                <p className="text-left text-base indent-4 text-gray-500">
                  {product.description}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
