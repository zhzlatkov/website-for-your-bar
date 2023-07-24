import prisma from "@/services/prismaClient.mjs";
import CategoryList from "@/components/CategoryList";
import PageLayout from "@/components/Layouts/PageLayout";
import generatePhotoUrl from "@/services/generatePhotoUrl";
import Separator from "@/components/Separator";

export default function Categories({ categories }) {
  return (
    <PageLayout>
      <Separator withIcon={false} />
      <CategoryList categories={categories} />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.categories.findMany();
  categories = categories.filter((category) => category.status);
  categories.map(
    (category) => (category.photoPath = generatePhotoUrl(category.photoPath))
  );
  return {
    props: {
      categories,
    },
  };
}
