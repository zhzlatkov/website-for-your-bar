import normalizeProduct from "@/normalizers/frontend/normalizeProduct";
import generatePhotoUrl from "@/services/generatePhotoUrl";
import AdminLayout from "@/components/Layouts/AdminLayout";
import prisma from "../../services/prismaClient.mjs";
import Sheet from "@/components/Sheet";

export default function Products({ products }) {
  const sanitizedProducts = products.map((product) => {
    return normalizeProduct(product);
  });
  return (
    <AdminLayout current={"products"}>
      <Sheet sheetName="product" data={sanitizedProducts}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let products = await prisma.Products.findMany();
  products.map((product) => (product.image = generatePhotoUrl(product.image)));

  return {
    props: {
      products,
    },
  };
}
