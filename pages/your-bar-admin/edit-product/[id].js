import prisma from "../../../services/prismaClient.mjs";
import ProductForm from "../../../components/ProductForm";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function EditProductPage({ categories, product }) {
  return (
    <AdminLayout current="edit-product">
      <ProductForm categories={categories} product={product} />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const categories = await prisma.category.findMany({});
  const product = await prisma.product.findFirst({
    where: {
      id: Number(query.id),
    },
    include: {
      category: true,
    },
  });
  return {
    props: {
      categories,
      product,
    },
  };
}
