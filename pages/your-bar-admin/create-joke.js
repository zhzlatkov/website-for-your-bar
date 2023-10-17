import Form from "../../components/Form";
import AdminLayout from "../../components/Layouts/AdminLayout";
import normalizeJoke from "@/normalizers/normalizeJoke";

export default function CreatJokePage() {
  const sanitizedJoke = normalizeJoke();

  return (
    <>
      <AdminLayout current={"create-joke"}>
        <Form
          formName={"create_joke"}
          destinationURL={"/jokes"}
          dataObject={sanitizedJoke}
        />
      </AdminLayout>
    </>
  );
}
