export default function Address() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-8 shadow-2xl xl:pt-18 xl:pb-24">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        We Are Here!
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-base sm:text-lg leading-8 text-gray-300">
        If for some reasone you forget where do you live, at least you will know
        home to come back to the bar.
      </p>
      <div className="w-11/12 max-w-6xl my-8 mx-auto">
        <div className="h-96 border-yellow-400 border-4 rounded-md mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.2364051600753!2d23.326534185460353!3d42.69787501891123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85712687e499%3A0x29370f3a6e85350!2z0J_QsNGC0YDQuNCw0YDRiNC10YHQutCwINC60LDRgtC10LTRgNCw0LvQsCDigJ7QodCy0LXRgtC4INCQ0LvQtdC60YHQsNC90LTRitGAINCd0LXQstGB0LrQuOKAnA!5e0!3m2!1sbg!2sbg!4v1685561254929!5m2!1sbg!2sbg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full mx-auto rounded-md invert contrast-75 hue-rotate-180"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
