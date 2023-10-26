import prisma from "../services/prismaClient.mjs";
import getOrderingStatus from "@/calls/getOrderingStatus";
import PageLayout from "@/components/Layouts/PageLayout.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import ShoppingCart from "@/components/ShoppingCart";
import { useEffect } from "react";
import { useOrderContext } from "@/context/OrderContext.js";

export default function Order({
  settings,
  socialMedias,
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
      <ShoppingCart order={order} />
      <Separator withIcon={false} />
    </PageLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  const orderCookie = req.cookies["order"];
  if (!orderCookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/menu",
      },
    };
  }
  const settings = await prisma.settings.findFirst({});
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

  if (!orderingStatus.status) {
    return {
      redirect: {
        permanent: false,
        destination: "/menu",
      },
    };
  }

  settings.logo = generatePhotoUrl(settings.logo);
  const socialMedias = await prisma.socialMedias.findMany({});
  return {
    props: {
      settings,
      socialMedias,
      order: orderingStatus.order ? orderingStatus.order : null,
      orderingStatus: true,
      statusOrdering: settings.statusOrdering,
    },
  };
}
