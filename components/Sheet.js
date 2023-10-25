import Link from "next/link";
import Image from "./Image";
import SheetBody from "./SheetBody";
import SheetHeader from "./SheetHeader";

export default function Sheet({ sheetName, data }) {
  return (
    <div className="pt-8 px-4 sm:px-6 lg:px-8 bg-shark-950">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold capitalize text-pirateGold-200">
            {`${sheetName}s`}
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href={`create-${sheetName}`}>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-sm border border-transparent bg-pirateGold-600 px-4 py-2 text-sm font-medium text-pirateGold-100 capitalize shadow-sm hover:bg-pirateGold-700 hover:text-pirateGold-300 focus:outline-none focus:ring-2 focus:ring-pirateGold-500 focus:ring-offset-2 sm:w-auto"
            >
              Add new {sheetName}
            </button>
          </Link>
        </div>
      </div>
      {data.length ? (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-shark-900 md:rounded-lg">
                <table className="min-w-full divide-y divide-shark-900">
                  <SheetHeader tableColumns={data[0]}></SheetHeader>
                  <SheetBody sheetName={sheetName} data={data}></SheetBody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
