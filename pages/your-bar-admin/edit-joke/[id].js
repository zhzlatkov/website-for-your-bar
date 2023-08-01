import prisma from "../../../services/prismaClient.mjs";
import Form from "../../../components/Form";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import normalizeJoke from "@/normalizers/normalizeJoke";

export default function EditJokePage({ joke }) {
  const sanitizedJoke = normalizeJoke(joke);
  return (
    <AdminLayout current="edit-joke">
      <Form
        formName={"edit_joke"}
        destinationURL={"/jokes"}
        dataObject={sanitizedJoke}
      />
    </AdminLayout>
  );
}

export async function getServerSideProps({ query }) {
  const joke = await prisma.jokes.findFirst({
    where: {
      id: Number(query.id),
    },
  });
  return {
    props: {
      joke,
    },
  };
}
