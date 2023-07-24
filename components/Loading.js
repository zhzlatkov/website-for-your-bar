export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <div
          className="inline-block h-20 w-20 mx-auto text-roseGold-200 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      <h1 className="mt-8 text-center text-2xl text-roseGold-200">
        Loading...
      </h1>
    </div>
  );
}
