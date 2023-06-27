import AdminLayout from "@components/components/AdminLayout.js";
import ProductsTable from "@components/components/ProductsTable.js";
import prisma from "../../services/prismaClient.mjs";

export default function AdminPanel({ products }) {
  return (
    <AdminLayout current={"products"}>
      <ProductsTable products={products}></ProductsTable>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const products = await prisma.products.findMany({
    include: { category: true },
  });
  return {
    props: {
      products,
    },
  };
}
