import Menu from "@/components/Menu.js";
import BarJoke from "@/components/BarJoke.js";
import Address from "@/components/Address.js";
import Services from "@/components/Services.js";
import Separator from "@/components/Separator.js";
import PageLayout from "@/components/Layouts/PageLayout.js";
import IntrestingFacts from "@/components/IntrestingFacts.js";
import prisma from "../services/prismaClient.mjs";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";

export default function Home({ categories }) {
  return (
    <>
      <PageLayout>
        <Services />
        <Separator />
        <Menu categories={categories} />
        <Separator />
        <Address />
        <IntrestingFacts />
        <Separator withIcon={false} />
        <BarJoke />
      </PageLayout>
    </>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.Categories.findMany({
    include: { products: true },
  });
  categories.map((category) => {
    category.image = generatePhotoUrl(category.image);
    category.products.map(
      (product) => (product.image = generatePhotoUrl(product.image))
    );
    return;
  });
  return {
    props: {
      categories,
    },
  };
}
