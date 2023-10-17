import Form from "../../components/Form";
import AdminLayout from "../../components/Layouts/AdminLayout";
import normalizeCategory from "@/normalizers/frontend/normalizeCategory";

export default function CreateCategoryPage() {
  const sanitizedCategory = normalizeCategory();
  return (
    <>
      <AdminLayout current={"create-category"}>
        <Form
          formName={"category"}
          destinationURL={"/categories"}
          dataObject={sanitizedCategory}
        />
      </AdminLayout>
    </>
  );
}
