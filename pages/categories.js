import CategoryList from "@/components/CateforyList";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Categories({ categories }) {
  return (
    <PageLayout>
      <CategoryList categories={categories} />
    </PageLayout>
  );
}

export async function getServerSideProps() {
  let categories = await prisma.Categories.findMany();
  categories = categories.filter((category) => category.status);
  return {
    props: {
      categories,
    },
  };
}
