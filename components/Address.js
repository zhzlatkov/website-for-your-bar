export default function Address({ isVisible, address }) {
  if (!isVisible) {
    return;
  }
  return (
    <section
      id="address"
      className="relative w-11/12 mx-auto isolate overflow-hidden bg-shark-950 pt-12 sm:text-center"
    >
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-pirateGold-200 text-shadow-h3 sm:text-4xl">
        We Are Here!
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg leading-8 text-pirateGold-400">
        If for some reasone you forget where do you live, at least you will know
        home to come back to the bar.
      </p>
      <div className="max-w-6xl my-8 mx-auto">
        <div className="h-96 border-shark-950 border-4 rounded-sm mx-auto">
          <iframe
            src={address}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full mx-auto rounded-sm invert contrast-75 hue-rotate-180"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
