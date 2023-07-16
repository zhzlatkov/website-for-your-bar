import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import ProductsTable from "@/components/ProductsTable";
import generateProductPhotoUrl from "@/services/generateProductPhotoUrl";

export default function Products({ products }) {
  return (
    <AdminLayout current={"products"}>
      <ProductsTable products={products}></ProductsTable>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let products = await prisma.Products.findMany();
  products.map(
    (product) =>
      (product.photoPath = generateProductPhotoUrl(product.photoPath))
  );

  return {
    props: {
      products,
    },
  };
}
