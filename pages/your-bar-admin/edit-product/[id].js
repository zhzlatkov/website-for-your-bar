import prisma from "../../../services/prismaClient.mjs";
import Form from "../../../components/Form";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import normalizeProduct from "@/normalizers/frontend/normalizeProduct";

export default function EditProductPage({ categories, product }) {
  const sanitizedProduct = normalizeProduct(product);
  return (
    <AdminLayout current="edit-product">
      <Form
        formName={"create_product"}
        destinationURL={"/products"}
        dataObject={sanitizedProduct}
        relationData={{ name: "category", options: categories }}
      />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const categories = await prisma.categories.findMany({});
  const product = await prisma.products.findFirst({
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
