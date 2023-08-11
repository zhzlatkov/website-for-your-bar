export default function normalizeService(service = null) {
  const sanitizedService = {
    name: service ? String(service.name).trim().toLowerCase() : "",
    information: service ? String(service.service_information) : "",
  };
  if (service.id) sanitizedService.id = Number(service.id);
  return sanitizedService;
}
