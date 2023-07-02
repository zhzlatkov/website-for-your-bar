import prisma from "../../../services/prismaClient.mjs";
import CategoryForm from "../../../components/CategoryForm";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function EditCategoryPage({ category }) {
  return (
    <AdminLayout current="edit-category">
      <CategoryForm category={category} />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const category = await prisma.categories.findFirst({
    where: {
      id: Number(query.id),
    },
  });
  return {
    props: {
      category,
    },
  };
}
