export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
      <div className="flex justify-center items-center">
        <div
          className="inline-block h-20 w-20 mx-auto animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      <h1 className="mt-8 text-center text-2xl">Loading...</h1>
    </div>
  );
}
