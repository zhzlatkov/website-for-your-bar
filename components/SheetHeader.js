export default function SheetHeader({ tableColumns }) {
  tableColumns = Object.keys(tableColumns);
  return (
    <thead className="bg-shark-900">
      <tr>
        {tableColumns.map((columnName) => {
          return (
            <th
              key={columnName}
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-pirateGold-200 capitalize sm:pl-6"
            >
              {columnName.replace("_", " ")}
            </th>
          );
        })}
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}
