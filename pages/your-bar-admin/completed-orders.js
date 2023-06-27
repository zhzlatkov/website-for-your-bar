import AdminLayout from "@components/components/AdminLayout.js";
import CompletedOrders from "@components/components/CompletedOrders.js";
import prisma from "../../services/prismaClient.mjs";

export default function AdminPanel({ completedOrders }) {
  return (
    <AdminLayout current={"completedOrders"}>
      <CompletedOrders orders={completedOrders}></CompletedOrders>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const completedOrders = await prisma.orders.findMany();
  console.log(completedOrders);
  return {
    props: {
      completedOrders,
    },
  };
}
