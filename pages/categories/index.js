import prisma from "@/services/prismaClient.mjs";
import CategoryList from "@/components/CategoryList";
import PageLayout from "@/components/Layouts/PageLayout";
import getOrderingStatus from "@/calls/getOrderingStatus";
import generatePhotoUrl from "@/services/generatePhotoUrl";
import Separator from "@/components/Separator";
import { useOrderContext } from "@/context/OrderContext.js";
import { useEffect } from "react";

export default function Categories({
  settings,
  socialMedias,
  categories,
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
    <PageLayout settings={settings} socialMedias={socialMedias}>
      <Separator withIcon={false} />
      <CategoryList categories={categories} />
    </PageLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  const socialMedias = await prisma.socialMedias.findMany({});
  let categories = await prisma.categories.findMany({
    where: { status: true },
    include: { products: { where: { status: true } } },
  });
  categories = categories.filter((category) => category.status);
  categories.map(
    (category) => (category.image = generatePhotoUrl(category.image))
  );

  const orderCookie = req.cookies["order"];
  if (!orderCookie) {
    return {
      props: {
        settings,
        socialMedias,
        categories,
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
