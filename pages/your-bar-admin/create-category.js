import Form from "../../components/Form";
import CategoryForm from "../../components/CategoryForm";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function CreateCategoryPage() {
  const category = {
    category_name: "",
    photo: "",
    short_description: "",
    status: false,
  };
  return (
    <>
      <AdminLayout current="create-category">
        <Form
          formName="create_category"
          destinationURL="/categories"
          dataObject={category}
        />
      </AdminLayout>
    </>
  );
}
