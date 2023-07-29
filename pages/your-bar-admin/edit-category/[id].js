import prisma from "../../../services/prismaClient.mjs";
import Form from "../../../components/Form";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import normalizeCategory from "@/normalizers/frontend/normalizeCategory";

export default function EditCategoryPage({ category }) {
  const sanitizedCategory = normalizeCategory(category);
  return (
    <AdminLayout current="edit-category">
      <Form
        formName="create_category"
        destinationURL="/categories"
        dataObject={sanitizedCategory}
      />
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
