import prisma from "../../../services/prismaClient.mjs";
import Form from "../../../components/Form";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import normalizeTable from "@/normalizers/normalizeTable";

export default function EditTablePage({ table }) {
  const sanitizedTable = normalizeTable(table);
  return (
    <AdminLayout current="edit-table">
      <Form
        formName={"edit_table"}
        destinationURL={"/tables"}
        dataObject={sanitizedTable}
      />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const table = await prisma.tables.findFirst({
    where: {
      id: Number(query.id),
    },
  });
  return {
    props: {
      table,
    },
  };
}
