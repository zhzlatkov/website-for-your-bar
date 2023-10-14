import normalizeFunFact from "./normalizeFunFact";

export default function normalizeSetting(settings) {
  const sanitizedSettings = {
    id: settings && settings.id ? Number(settings.id) : undefined,
    name: String(settings.name).trim(),
    logo: String(settings.logo).trim(),
    email: String(settings.email).trim(),
    phone: Number(settings.phone),
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
  if (settings.fun_facts?.length > 0) {
    sanitizedSettings.funFacts = settings.fun_facts.map((funFact) =>
      normalizeFunFact(funFact)
    );
  }
  if (settings.jokes?.length > 0) {
    sanitizedSettings.jokes = settings.jokes;
  }
  return sanitizedSettings;
}
