import AdminLayout from "@components/components/AdminLayout.js";
import CategoriesTable from "@components/components/CategoriesTable.js";
import prisma from "../../services/prismaClient.mjs";

export default function AdminPanel({ categories }) {
  return (
    <AdminLayout current={"categories"}>
      <CategoriesTable categories={categories}></CategoriesTable>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const categories = await prisma.categories.findMany({
    include: { products: true },
  });
  return {
    props: {
      categories,
    },
  };
}
