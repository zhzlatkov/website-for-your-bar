import prisma from "../../../services/prismaClient.mjs";
import Form from "../../../components/Form";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import normalizeFunFact from "@/normalizers/frontend/normalizeFunFact";

export default function EditFunFactPage({ funFact }) {
  const sanitizedFunFact = normalizeFunFact(funFact);
  return (
    <AdminLayout current="edit-fun-fact">
      <Form
        formName={"edit_fun_fact"}
        destinationURL={"/fun-facts"}
        dataObject={sanitizedFunFact}
      />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const funFact = await prisma.funFacts.findFirst({
    where: {
      id: Number(query.id),
    },
  });
  return {
    props: {
      funFact,
    },
  };
}
