import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import CategoriesTable from "@/components/CategoriesTable";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";

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
    (category) => (category.photoPath = generatePhotoUrl(category.photoPath))
  );
  return {
    props: {
      categories,
    },
  };
}
