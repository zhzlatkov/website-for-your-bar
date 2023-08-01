import Image from "./Image";
import Link from "next/link";

export default function SheetBody({ sheetName, data }) {
  return (
    <tbody className="divide-y divide-shark-900 bg-shark-950">
      {data.map((row) => (
        <tr key={row.id}>
          {Object.keys(row).map((property) => {
            if (property.includes("photo")) {
              return (
                <>
                  <td
                    key={sheetName + "_" + property}
                    className="whitespace-nowrap flex items-center py-4 pl-4 pr-3 text-sm sm:pl-6"
                  >
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        classNameRoot="h-10 w-10"
                        classNameImage="object-cover rounded-sm"
                        src={row.photo}
                        alt="Image"
                      />
                    </div>
                    <Link
                      href={row.photo}
                      className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400"
                    >
                      {`${row.photo.substring(8, 35)}...`}
                    </Link>
                  </td>
                </>
              );
            }
            if (property === "status") {
              return (
                <td
                  key={sheetName + "_" + property}
                  className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400"
                >
                  {row[property] ? (
                    <span className="inline-flex rounded-full bg-green-800 px-2 text-xs font-semibold leading-5 text-green-100">
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-red-800 px-2 text-xs font-semibold leading-5 text-red-100">
                      Not Available
                    </span>
                  )}
                </td>
              );
            }
            return (
              <td
                key={sheetName + "_" + property}
                className="whitespace-nowrap px-3 py-4 text-sm text-pirateGold-400"
              >
                <div className="text-pirateGold-400">{row[property]}</div>
              </td>
            );
          })}
          <td
            key={"edit" + "_" + sheetName}
            className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
          >
            <Link
              href={`edit-${sheetName}/${row.id}`}
              className="text-pirateGold-600 hover:text-pirateGold-900"
            >
              Edit
              <span className="sr-only">, {sheetName}</span>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
