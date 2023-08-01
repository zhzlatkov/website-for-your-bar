export default function normalizeService(service = null) {
  const sanitizedService = {
    name: service ? String(service.name).trim().toLowerCase : "",
    service_information: service ? String(service.information) : "",
  };
  if (service.id) sanitizedService.id = Number(service.id);
  return sanitizedService;
}