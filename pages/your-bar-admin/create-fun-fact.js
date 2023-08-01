import Form from "../../components/Form";
import AdminLayout from "../../components/Layouts/AdminLayout";
import normalizeFunFact from "@/normalizers/normalizeFunFact";

export default function CreatFunFactPage() {
  const sanitizedFunFact = normalizeFunFact();

  return (
    <>
      <AdminLayout current="create-fun-fact">
        <Form
          formName={"create_fun_fact"}
          destinationURL={"./fun-facts"}
          dataObject={sanitizedFunFact}
        />
      </AdminLayout>
    </>
  );
}
