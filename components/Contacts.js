export default function Contacts({ settings }) {
  return (
    <section
      id="address"
      className="relative w-11/12 mx-auto isolate overflow-hidden bg-shark-950 pt-16 sm:text-center"
    >
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-pirateGold-200 text-shadow-h3 sm:text-4xl">
        Contacts
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg leading-8 text-pirateGold-100">
        Don&apos;t worry about writing us anytime or calling us <br /> between
        11am and 11pm every day..
      </p>
      <div className="max-w-6xl my-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          <div className="rounded-sm bg-shark-900 p-10">
            <h3 className="sm:text-lg font-semibold leading-7 text-pirateGold-200">
              Email us:
            </h3>
            <dl className="mt-3 space-y-1 sm:text-xl leading-6 text-pirateGold-600">
              <div>
                <dt className="sr-only">Имейл</dt>
                <dd>
                  <a
                    className="font-semibold text-pirateGold-500"
                    href={`mailto:${settings.email}`}
                  >
                    {settings.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-sm bg-shark-900 p-10">
            <h3 className="sm:text-lg font-semibold leading-7 text-pirateGold-200">
              Call us:
            </h3>
            <dl className="mt-3 space-y-1 sm:text-xl leading-6 text-pirateGold-600">
              <div>
                <dt className="sr-only">Телефон</dt>
                <dd>
                  <a
                    className="font-semibold text-pirateGold-500"
                    href={`tel:+359${settings.phone}`}
                  >
                    +359{settings.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
