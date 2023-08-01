import Form from "../../components/Form";
import AdminLayout from "../../components/Layouts/AdminLayout";
import normalizeTable from "@/normalizers/normalizeTable";

export default function CreatTablePage() {
  const sanitizedTable = normalizeTable();

  return (
    <>
      <AdminLayout current="create-table">
        <Form
          formName={"create_table"}
          destinationURL={"./tables"}
          dataObject={sanitizedTable}
        />
      </AdminLayout>
    </>
  );
}
