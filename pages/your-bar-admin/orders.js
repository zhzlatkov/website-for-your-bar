import normalizeOrder from "@/normalizers/frontend/normalizeOrder";
import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import Sheet from "@/components/Sheet";

export default function Orders({ orders }) {
  const sanitizedOrders = orders.map((order) => {
    return normalizeOrder(order);
  });
  return (
    <AdminLayout current={"orders"}>
      <Sheet sheetName={"order"} data={sanitizedOrders}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let orders = await prisma.orders.findMany({
    include: { orderedProducts: true, table: true },
  });

  return {
    props: {
      orders,
    },
  };
}
