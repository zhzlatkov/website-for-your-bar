import AdminLayout from "@components/components/AdminLayout.js";
import TablesTable from "@components/components/TablesTable.js";
import prisma from "../../services/prismaClient.mjs";

export default function AdminPanel({ tables }) {
  return (
    <AdminLayout current={"tables"}>
      <TablesTable tables={tables}></TablesTable>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const tables = await prisma.tables.findMany({});
  return {
    props: {
      tables,
    },
  };
}
