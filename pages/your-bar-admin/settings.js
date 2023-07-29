import AdminLayout from "@/components/Layouts/AdminLayout";
import normalizeSetting from "@/normalizers/frontend/normalizeSettings";
import prisma from "@/services/prismaClient.mjs";
import Form from "@/components/Form";

export default function Settings({ settings }) {
  const sanitizedSettings = normalizeSetting(settings);
  return (
    <AdminLayout current={"settings"}>
      <Form
        formName={"settings"}
        destinationURL={"/"}
        dataObject={sanitizedSettings}
      />
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const settings = await prisma.settings.findFirst({});
  console.log(settings);
  return {
    props: { settings },
  };
}
