export default function normalizeService(service = null) {
  const sanitizedService = {
    id: service ? Number(service.id) : undefined,
    name: service ? String(service.name).trim().toLowerCase() : "",
    service_information: service ? String(service.information) : "",
  };
  return sanitizedService;
}
