import prisma from "../../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import ProductComponent from "@/components/ProductComponent.js";
import getOrderingStatus from "@/calls/getOrderingStatus";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import { useOrderContext } from "@/context/OrderContext.js";
import { useEffect } from "react";

export default function Product({
  settings,
  socialMedias,
  product,
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
      <ProductComponent product={product}></ProductComponent>
    </PageLayout>
  );
}

export async function getServerSideProps({ query, req, res }) {
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  const socialMedias = await prisma.socialMedias.findMany({});
  const { name } = query;
  const product = await prisma.products.findUnique({
    where: { name: `${name}` },
    include: {
      category: true,
    },
  });
  if (!product)
    return {
      redirect: {
        destination: "/menu",
        permanent: false,
      },
    };
  product.image = generatePhotoUrl(product.image);

  const orderCookie = req.cookies["order"];

  if (!orderCookie) {
    return {
      props: {
        settings,
        socialMedias,
        product,
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
