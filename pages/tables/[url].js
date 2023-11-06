import prisma from "../../services/prismaClient.mjs";
import generateRandomString from "@/calls/generateRandomString";
import { HOUR_IN_MS } from "../../utils/numbers";
import PageLayout from "@/components/Layouts/PageLayout.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";
import Menu from "@/components/Menu";
import { useEffect } from "react";
import { useOrderContext } from "@/context/OrderContext.js";

export default function Table({
  settings,
  socialMedias,
  categories,
  order,
  orderingStatus,
}) {
  const { updateAllowedOrder, updateOrderingCode, updateOrderedProducts } =
    useOrderContext();
  useEffect(() => {
    updateAllowedOrder(orderingStatus);
    updateOrderingCode(order?.orderCode);
    updateOrderedProducts(order?.orderedProducts || []);
  }, []);

  return (
    <div className="bg-gray-900">
      <PageLayout settings={settings} socialMedias={socialMedias}>
        <Separator withIcon={false} />
        <Menu categories={categories} />
      </PageLayout>
    </div>
  );
}

export async function getServerSideProps({ req, res, query }) {
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  let socialMedias = await prisma.socialMedias.findMany({});
  let categories = await prisma.categories.findMany({
    include: { products: true },
  });
  categories.map((category) => {
    category.image = generatePhotoUrl(category.image);
    category.products.map(
      (product) => (product.image = generatePhotoUrl(product.image))
    );
    return;
  });

  const orderCookie = req.cookies["order"];
  let cookie;
  if (orderCookie) {
    cookie = await prisma.cookies.findFirst({
      where: { cookie: orderCookie },
    });
  }
  if (cookie?.orderId) {
    const orders = await prisma.orders.findMany({
      where: { id: cookie.orderId, isClosed: false },
      include: { clientsCookies: true, orderedProducts: true },
    });
    if (orders.length !== 1) {
      res
        .setHeader(
          "Set-Cookie",
          "order=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        )
        .status(404)
        .send({
          message: `Please refresh your page and try again. If you are seeing same error please contact our staff.`,
        });
    }
    return {
      props: {
        settings,
        socialMedias,
        categories,
        order: orders[0],
        orderingStatus: true,
        statusOrdering: true,
      },
    };
  }

  const url = "/tables/" + query.url;
  const table = await prisma.tables.findFirst({
    where: {
      url: url,
      status: true,
    },
  });

  if (!table) {
    if (!cookie) {
      res.setHeader(
        "Set-Cookie",
        "order=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      );
    }
    return {
      redirect: {
        permanent: false,
        destination: "/menu",
      },
    };
  }

  const orders = await prisma.orders.findMany({
    where: {
      tableId: table.id,
      isClosed: false,
    },
    include: {
      clientsCookies: true,
      orderedProducts: true,
    },
  });

  if (
    orders.length > 1 ||
    (orders.length === 0 && (!settings.statusOrdering || !table.status))
  ) {
    if (!cookie) {
      res.setHeader(
        "Set-Cookie",
        "order=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      );
    }
    return {
      redirect: {
        permanent: false,
        destination: "/menu",
      },
    };
  }

  if (
    !cookie &&
    (orders.length === 1 || (settings.statusOrdering && table.status))
  ) {
    const expirationTime = new Date(Date.now() + 4 * HOUR_IN_MS);
    const cookieValue = generateRandomString() + "_" + table.id;
    res.setHeader("Set-Cookie", [
      `order=${cookieValue}; expires=${expirationTime.toUTCString()}; path=/; priority=high; secure; HttpOnly; SameSite=Strict;`,
    ]);
    cookie = await prisma.cookies.create({
      data: {
        cookie: cookieValue,
      },
    });
  }

  return {
    props: {
      settings,
      socialMedias,
      categories,
      order: null,
      orderingStatus: true,
      statusOrdering: settings.statusOrdering && table.status,
    },
  };
}
