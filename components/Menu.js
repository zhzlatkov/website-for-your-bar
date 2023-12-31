import MenuCategory from "./MenuCategory";
import FlashMessage from "./FlashMessage";

export default function Menu({ categories }) {
  return (
    <>
      <FlashMessage />
      <section className="bg-shark-950 w-11/12 mx-auto py-12 max-w-6xl mx-auto divide-y divide-pirateGold-500/10">
        <h2 className="text-center text-3xl text-shadow-h3 font-bold tracking-tight text-pirateGold-200 sm:text-4xl">
          Our Menu
        </h2>
        <dl className="mt-10 transition-all space-y-6 divide-y divide-pirateGold-500/10">
          {categories.map((category) => {
            return (
              <MenuCategory
                key={category.name}
                category={category}
              ></MenuCategory>
            );
          })}
        </dl>
      </section>
    </>
  );
}
