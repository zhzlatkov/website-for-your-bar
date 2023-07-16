import CategoryList from "@/components/CategoryList";
import PageLayout from "@/components/Layouts/PageLayout";
import prisma from "@/services/prismaClient.mjs";
import generateProductPhotoUrl from "@/services/generateProductPhotoUrl";

export default function Categories({ categories }) {
  return (
    <PageLayout>
      <CategoryList categories={categories} />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.categories.findMany();
  categories = categories.filter((category) => category.status);
  categories.map(
    (category) =>
      (category.photoPath = generateProductPhotoUrl(category.photoPath))
  );
  return {
    props: {
      categories,
    },
  };
}
