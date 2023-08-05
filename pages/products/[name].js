import prisma from "../../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import ProductComponent from "@/components/ProductComponent.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import Separator from "@/components/Separator";

export default function Product({ product }) {
  return (
    <PageLayout>
      <Separator withIcon={false} />
      <ProductComponent product={product}></ProductComponent>
    </PageLayout>
  );
}

export async function getServerSideProps({ query }) {
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
        destination: "/categories",
        permanent: false,
      },
    };
  product.image = generatePhotoUrl(product.image);
  return {
    props: {
      product,
    },
  };
}
