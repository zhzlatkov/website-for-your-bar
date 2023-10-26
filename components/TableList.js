import TableItem from "./TableItem";

export default function TableList({ tables }) {
  return (
    <>
      <div className="flex flex-wrap">
        {tables.map((table) => {
          return <TableItem key={table.id} table={table}></TableItem>;
        })}
      </div>
    </>
  );
}
