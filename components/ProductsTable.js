import Link from "next/link";
import Image from "./Image";

export default function ProductsTable({ products }) {
  return (
    <div className="pt-8 px-4 sm:px-6 lg:px-8 bg-shark-950">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-pirateGold-200">
            Products
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="create-product">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-pirateGold-600 px-4 py-2 text-sm font-medium text-pirateGold-100 shadow-sm hover:bg-pirateGold-700 hover:text-pirateGold-300 focus:outline-none focus:ring-2 focus:ring-pirateGold-500 focus:ring-offset-2 sm:w-auto"
            >
              Add new product
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-shark-900 md:rounded-lg">
              <table className="min-w-full divide-y divide-shark-900">
                <thead className="bg-shark-900">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-pirateGold-200 sm:pl-6"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-pirateGold-200 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-pirateGold-200"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-pirateGold-200"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-pirateGold-200"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-pirateGold-200"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-pirateGold-200"
                    >
                      Photo
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-shark-900 bg-shark-950">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        <div className="text-pirateGold-400">{product.id}</div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <Image
                              classNameRoot="h-10 w-10 rounded-full"
                              classNameImage="object-cover"
                              src={product.photoPath}
                              alt="Image"
                            />
                          </div>
                          <div className="ml-4 font-medium text-pirateGold-200">
                            {product.name}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        <div className="text-pirateGold-400">
                          {product.price}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        <div className="text-pirateGold-400">
                          {product.quantity} {product.quantityType}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        <div className="text-pirateGold-400">
                          {product.categoryId}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        {product.status ? (
                          <span className="inline-flex rounded-full bg-green-800 px-2 text-xs font-semibold leading-5 text-green-100">
                            Available
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-red-800 px-2 text-xs font-semibold leading-5 text-red-100">
                            Not Available
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400">
                        <Link
                          href={product.photoPath}
                          className="text-pirateGold-400"
                        >
                          {`${product.photoPath.substring(8, 35)}...`}
                        </Link>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          href={`edit-product/${product.id}`}
                          className="text-pirateGold-600 hover:text-pirateGold-900"
                        >
                          Edit
                          <span className="sr-only">, {product.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
