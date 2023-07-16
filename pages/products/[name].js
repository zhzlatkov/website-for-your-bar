import prisma from "../../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import ProductComponent from "@/components/ProductComponent.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";

export default function Product({ product }) {
  return (
    <div className="bg-gray-900 ">
      <PageLayout>
        <ProductComponent product={product}></ProductComponent>
      </PageLayout>
    </div>
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
  product.photoPath = generatePhotoUrl(product.photoPath);
  return {
    props: {
      product,
    },
  };
}
