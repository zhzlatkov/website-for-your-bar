import AdminLayout from "@/components/Layouts/AdminLayout";
import normalizeJoke from "@/normalizers/normalizeJoke";
import prisma from "../../services/prismaClient.mjs";
import Sheet from "@/components/Sheet";

export default function Jokes({ jokes }) {
  const sanitizedJokes = jokes.map((joke) => {
    return normalizeJoke(joke);
  });
  return (
    <AdminLayout current={"jokes"}>
      <Sheet sheetName="joke" data={sanitizedJokes}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let jokes = await prisma.Jokes.findMany();

  return {
    props: {
      jokes,
    },
  };
}
