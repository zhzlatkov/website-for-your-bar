import prisma from "../services/prismaClient.mjs";
import getOrderingStatus from "@/calls/getOrderingStatus";
import PageLayout from "@/components/Layouts/PageLayout.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import Menu from "@/components/Menu";
import { useOrderContext } from "@/context/OrderContext.js";
import { useEffect } from "react";

export default function OurMenu({
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
    <div className="bg-gray-900 ">
      <PageLayout settings={settings} socialMedias={socialMedias} order={order}>
        <Separator withIcon={false} />
        <Menu categories={categories} />
      </PageLayout>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  const socialMedias = await prisma.socialMedias.findMany({});
  const orderCookie = req.cookies["order"];
  let categories = await prisma.categories.findMany({
    where: { status: true },
    include: { products: { where: { status: true } } },
  });
  categories.map((category) => {
    category.image = generatePhotoUrl(category.image);
    category.products.map(
      (product) => (product.image = generatePhotoUrl(product.image))
    );
    return;
  });

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
      socialMedias,
      categories,
      order: orderingStatus.order,
      orderingStatus: orderingStatus.status,
      statusOrdering: settings.statusOrdering,
    },
  };
}
