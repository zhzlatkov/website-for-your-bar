import prisma from "../../services/prismaClient.mjs";
import ProductForm from "../../components/ProductForm";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function CreateProductPage({ categories }) {
  return (
    <>
      <AdminLayout current="create-product">
        <ProductForm categories={categories} />
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps() {
  const categories = await prisma.categories.findMany({});
  return {
    props: {
      categories,
    },
  };
}
