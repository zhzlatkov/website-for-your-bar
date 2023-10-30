import prisma from "../../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import getOrderingStatus from "@/calls/getOrderingStatus";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import MenuProduct from "@/components/MenuProduct";
import { useOrderContext } from "@/context/OrderContext.js";
import { useEffect } from "react";

export default function Category({
  settings,
  socialMedias,
  category,
  order,
  orderingStatus,
  statusOrdering,
}) {
  const { updateAllowedOrder, updateOrderingCode, updateOrderedProducts } =
    useOrderContext();

  useEffect(() => {
    updateAllowedOrder(orderingStatus);
    updateOrderingCode(order?.orderCode);
    updateOrderedProducts(order?.orderedProducts || []);
  }, []);

  return (
    <div className="bg-gray-900 ">
      <PageLayout settings={settings} socialMedias={socialMedias}>
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

export async function getServerSideProps({ query, req, res }) {
  const { name } = query;
  const categories = await prisma.categories.findMany({
    where: { status: true },
    include: { products: { where: { status: true } } },
  });
  const category = categories.find((category) => category.name === name);
  if (!category) {
    return {
      redirect: {
        permanent: false,
        destination: "/categories",
      },
    };
  }
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  let socialMedias = await prisma.socialMedias.findMany({});
  category.image = generatePhotoUrl(category.image);
  category.products.map(
    (product) => (product.image = generatePhotoUrl(product.image))
  );

  const orderCookie = req.cookies["order"];

  if (!orderCookie) {
    return {
      props: {
        settings,
        socialMedias,
        category,
        order: [],
        orderingStatus: false,
        statusOrdering: false,
      },
    };
  }

  const orderingStatus = await getOrderingStatus(
    orderCookie,
    settings.statusOrdering
  );
  if (orderingStatus.error) {
    res.setHeader(
      "Set-Cookie",
      "order=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    );
  }

  return {
    props: {
      settings,
      services,
      socialMedias,
      categories,
      order: orderingStatus.order,
      orderingStatus: orderingStatus.status,
      statusOrdering: settings.statusOrdering,
    },
  };
}
