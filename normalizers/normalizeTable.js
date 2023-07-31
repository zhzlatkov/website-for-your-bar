export default function normalizeTable(table = null) {
  const sanitizedTable = {
    name: table ? String(table.name).trim().toLowerCase : "",
    seats: table ? Number(table.seats) : 0,
    status: table ? Bolean(table.status) : false,
  };
  return sanitizedTable;
}
