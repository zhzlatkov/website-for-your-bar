import prisma from "../../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import MenuProduct from "@/components/MenuProduct";

export default function Category({ category }) {
  return (
    <div className="bg-gray-900 ">
      <PageLayout>
        <Separator withIcon={false} />
        <div className="mt-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-pirateGold-400 capitalize my-6 sm:text-4xl">
            {category.name}
          </h2>
          <div className="w-11/12 mx-auto my-12 border-y-2 border-pirateGold-500/10">
            {category.products.map((product) => {
              return (
                <MenuProduct key={product.name} product={product}></MenuProduct>
              );
            })}
          </div>
        </div>
      </PageLayout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { name } = query;
  const category = await prisma.categories.findUnique({
    where: { name },
    include: { products: true },
  });
  category.image = generatePhotoUrl(category.image);
  category.products.map(
    (product) => (product.image = generatePhotoUrl(product.image))
  );
  return {
    props: {
      category,
    },
  };
}
