import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <Spinner size={20} text="Loading..."></Spinner>
      </div>
      <h1 className="mt-8 text-center text-2xl text-pirateGold-200">
        Loading...
      </h1>
    </div>
  );
}
