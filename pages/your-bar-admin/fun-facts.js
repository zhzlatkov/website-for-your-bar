import AdminLayout from "@/components/Layouts/AdminLayout";
import normalizeFunFact from "@/normalizers/frontend/normalizeFunFact";
import prisma from "../../services/prismaClient.mjs";
import Sheet from "@/components/Sheet";

export default function FunFacts({ funFacts }) {
  const sanitizedFunFacts = funFacts.map((funFact) => {
    return normalizeFunFact(funFact);
  });
  return (
    <AdminLayout current={"fun-facts"}>
      <Sheet sheetName={"fun-fact"} data={sanitizedFunFacts}></Sheet>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  let funFacts = await prisma.FunFacts.findMany();

  return {
    props: {
      funFacts,
    },
  };
}
