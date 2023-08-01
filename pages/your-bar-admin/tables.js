import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import normalizeTable from "@/normalizers/normalizeTable";
import Sheet from "@/components/Sheet";

export default function Tables({ tables }) {
  const sanitizedTables = tables.map((table) => {
    return normalizeTable(table);
  });
  return (
    <AdminLayout current={"tables"}>
      <Sheet sheetName="table" data={sanitizedTables}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let tables = await prisma.Tables.findMany();

  return {
    props: {
      tables,
    },
  };
}
