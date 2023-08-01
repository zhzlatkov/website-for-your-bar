import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import Sheet from "@/components/Sheet";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";
import normalizeCategory from "@/normalizers/frontend/normalizeCategory";

export default function Categories({ categories }) {
  const sanitizedCategories = categories.map((category) => {
    return normalizeCategory(category);
  });
  return (
    <AdminLayout current={"categories"}>
      <Sheet sheetName="category" data={sanitizedCategories}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.Categories.findMany();
  categories.map(
    (category) => (category.image = generatePhotoUrl(category.image))
  );
  return {
    props: {
      categories,
    },
  };
}
