import Form from "../../components/Form";
import prisma from "../../services/prismaClient.mjs";
import AdminLayout from "../../components/Layouts/AdminLayout";
import normalizeProduct from "@/normalizers/frontend/normalizeProduct";

export default function CreateProductPage({ categories }) {
  const sanitizedProduct = normalizeProduct();

  return (
    <>
      <AdminLayout current={"create-product"}>
        <Form
          formName={"create_product"}
          destinationURL={"/products"}
          dataObject={sanitizedProduct}
          relationData={{ name: "category", options: categories }}
        />
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
