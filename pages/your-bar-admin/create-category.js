import CategoryForm from "../../components/CategoryForm";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function CreateCategoryPage() {
  return (
    <>
      <AdminLayout current="create-category">
        <CategoryForm />
      </AdminLayout>
    </>
  );
}
