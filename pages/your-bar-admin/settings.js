import AdminLayout from "@/components/Layouts/AdminLayout";
import normalizeSettings from "@/normalizers/frontend/normalizeSettings";
import normalizeService from "@/normalizers/frontend/normalizeService";
import normalizeSocialMedia from "@/normalizers/frontend/normalizeSocialMedia";
import prisma from "@/services/prismaClient.mjs";
import Form from "@/components/Form";

export default function Settings({ settings, socialMedias, services }) {
  const sanitizedSettings = normalizeSettings(settings);
  const sanitizedSocialMedias = socialMedias.map((socialMedia) => {
    return normalizeSocialMedia(socialMedia);
  });
  const sanitizedServices = services.map((service) => {
    return normalizeService(service);
  });
  return (
    <AdminLayout current={"settings"}>
      <div>
        <Form
          formName={"settings"}
          destinationURL={"/"}
          dataObject={sanitizedSettings}
        />
        {sanitizedSocialMedias.map((socialMedia) => {
          return (
            <>
              <Form
                formName={"social_media"}
                destinationURL={""}
                dataObject={socialMedia}
              />
            </>
          );
        })}
        {sanitizedServices.map((service) => {
          return (
            <>
              <Form
                formName={"service"}
                destinationURL={""}
                dataObject={service}
              />
            </>
          );
        })}
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const settings = await prisma.settings.findFirst({});
  const socialMedias = await prisma.socialMedias.findMany({});
  const services = await prisma.services.findMany({});
  return {
    props: { settings, socialMedias, services },
  };
}
