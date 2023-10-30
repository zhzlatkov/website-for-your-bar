import Menu from "@/components/Menu.js";
import BarJoke from "@/components/BarJoke.js";
import Address from "@/components/Address.js";
import Services from "@/components/Services.js";
import Separator from "@/components/Separator.js";
import getOrderingStatus from "@/calls/getOrderingStatus";
import PageLayout from "@/components/Layouts/PageLayout.js";
import FunFacts from "@/components/FunFacts.js";
import prisma from "../services/prismaClient.mjs";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import { useOrderContext } from "@/context/OrderContext.js";
import { useEffect } from "react";

export default function Home({
  settings,
  services,
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
      <Services
        headingOne={settings.homeHeading1}
        headingTwo={settings.homeHeading2}
        shortDescription={settings.shortDescription}
        services={services}
      />
      <Separator />
      <Menu categories={categories} />
      <Separator
        className={
          settings.addressStatus || settings.statusFunFacts ? "" : "hidden"
        }
      />
      <Address
        isVisible={settings.addressStatus && settings.address.length > 0}
        address={settings.address}
      />
      <FunFacts
        isVisible={settings.statusFunFacts && settings.funFacts.length >= 3}
        funFacts={settings.funFacts}
      />

      <BarJoke
        isVisible={settings.statusJokes && settings.jokes.length > 0}
        jokes={settings.jokes}
        image={settings.jokesImage}
      />

      <Separator withIcon={false} />
    </PageLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  let settings = await prisma.settings.findFirst({
    include: {
      funFacts: {
        where: {
          status: true,
        },
      },
      jokes: {
        where: {
          status: true,
        },
      },
    },
  });
  settings.logo = generatePhotoUrl(settings.logo);
  if (settings.statusJokes) {
    settings.jokesImage = generatePhotoUrl(settings.jokesImage);
  }
  const services = await prisma.services.findMany();
  const socialMedias = await prisma.socialMedias.findMany();
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

  const orderCookie = req.cookies["order"];
  if (!orderCookie) {
    return {
      props: {
        settings,
        services,
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
