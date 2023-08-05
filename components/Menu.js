import MenuCategory from "./MenuCategory";

export default function Menu({ categories, table = false, settings = false }) {
  return (
    <div className="bg-shark-950 w-11/12 mx-auto py-12 max-w-6xl mx-auto divide-y divide-pirateGold-500/10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-pirateGold-200 sm:text-4xl">
        Our Menu
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-pirateGold-500/10">
        {categories.map((category) => {
          return (
            <MenuCategory
              key={category.name}
              category={category}
              table={table}
              settings={settings}
            ></MenuCategory>
          );
        })}
      </dl>
    </div>
  );
}
