export default function normalizeSetting(settings) {
  const sanitizedSettings = {
    name: String(settings.name).trim(),
    logo: String(settings.logo).trim(),
    email: String(settings.email).trim(),
    phone: Boolean(settings.phone),
    homeHeading1: String(settings.home_top_heading).trim(),
    homeHeading2: String(settings.home_second_heading).trim(),
    shortDescription: String(settings.short_description).trim(),
    addressStatus: Boolean(settings.address_status),
    address: String(settings.address).trim(),
    statusFunFacts: Boolean(settings.status_fun_facts),
    statusJokes: Boolean(settings.status_jokes),
    jokesImage: String(settings.jokes_image).trim(),
    statusOrdering: Boolean(settings.status_ordering),
  };
  return sanitizedSettings;
}
