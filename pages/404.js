import Image from "../components/Image";
import prisma from "../services/prismaClient.mjs";
import PageLayout from "@/components/Layouts/PageLayout.js";
import generatePhotoUrl from "@/services/generatePhotoUrl.js";

export default function Error404({ settings, socialMedias }) {
  return (
    <>
      <PageLayout settings={settings} socialMedias={socialMedias}>
        <main className="max-w-3xl p-4 m-auto mt-12">
          <p className="text-2xl font-semibold text-center leading-8 text-pirateGold-200 text-shadow-h1">
            404
          </p>
          <h1 className="mt-4 text-3xl text-center font-bold tracking-tight text-shark-100 sm:text-5xl text-shadow-h2">
            Page not found
          </h1>
          <p className="mt-4 text-center text-base text-shark-100/70 sm:mt-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="./"
              className="text-sm font-semibold leading-7 text-shark-100 border-pirateGold-200 border-2 rounded-sm px-4 py-1 shadow-md shadow-pirateGold-200/40"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
          <Image
            src="https://cdn.pixabay.com/photo/2014/08/26/20/08/man-428392_1280.jpg"
            alt="let me tell you some fun bar joke"
            classNameImage="inset-0 h-full w-full rounded-sm bg-shark-800 object-cover object-top shadow-2xl border-pirateGold-200 border-4"
            classNameRoot="aspect-[2/1] h-full m-auto mt-16 shadow-2xl shadow-pirateGold-700/60"
          ></Image>
        </main>
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  let settings = await prisma.settings.findFirst({});
  settings.logo = generatePhotoUrl(settings.logo);
  const socialMedias = await prisma.socialMedias.findMany({});

  return {
    props: {
      settings,
      socialMedias,
    },
  };
}
