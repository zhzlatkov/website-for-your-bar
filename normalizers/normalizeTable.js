export default function normalizeTable(table = null) {
  const sanitizedTable = {
    id: table && table.id ? Number(table.id) : undefined,
    name: table ? String(table.name).trim().toLowerCase() : "",
    seats: table ? Number(table.seats) : 0,
    status: table ? Boolean(table.status) : false,
  };
  return sanitizedTable;
}
