import TableList from "@/components/TableList";
import AdminLayout from "@/components/Layouts/AdminLayout";

export default function AdminPanel({ settings, tables }) {
  let sortedTables = tables.sort((a, b) => Number(a.order) - Number(b.order));
  if (settings.statusOrdering === false) {
    sortedTables = tables.filter(
      (table) => table.orders?.[0]?.isClosed === false
    );
  }

  return (
    <AdminLayout current={"dashboard"}>
      {settings.statusOrdering && sortedTables.length ? (
        <TableList tables={sortedTables} />
      ) : null}
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const settings = await prisma.settings.findFirst({});
  const tables = await prisma.tables.findMany({
    include: {
      orders: {
        where: { isClosed: false },
        include: { orderedProducts: { include: { product: true } } },
      },
    },
  });

  return {
    props: {
      settings,
      tables,
    },
  };
}
