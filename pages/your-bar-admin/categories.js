import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import CategoriesTable from "@/components/CategoriesTable";
import generateProductPhotoUrl from "@/services/generateProductPhotoUrl.js";

export default function Categories({ categories }) {
  return (
    <AdminLayout current={"categories"}>
      <CategoriesTable categories={categories}></CategoriesTable>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.Categories.findMany();
  categories.map(
    (category) =>
      (category.photoPath = generateProductPhotoUrl(category.photoPath))
  );
  return {
    props: {
      categories,
    },
  };
}
