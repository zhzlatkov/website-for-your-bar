import prisma from "../../services/prismaClient.mjs";
import Form from "../../components/Form";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function CreateProductPage({ categories }) {
  const product = {
    product_name: "",
    price: 0,
    quantity: 0,
    quantity_type: "",
    short_description: "",
    long_description: "",
    category: 0,
    status: false,
    photo: "",
  };

  return (
    <>
      <AdminLayout current="create-product">
        <Form
          formName={"create_product"}
          destinationURL={"/products"}
          dataObject={product}
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
