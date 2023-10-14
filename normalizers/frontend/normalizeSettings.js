export default function normalizeSetting(settings = null) {
  const sanitizedSettings = {
    id: settings ? Number(settings.id) : undefined,
    name: settings ? String(settings.name).trim() : "",
    logo: settings ? String(settings.logo).trim() : "",
    email: settings ? String(settings.email).trim() : "",
    phone: settings ? Number(settings.phone) : 0,
    home_top_heading: settings ? String(settings.homeHeading1).trim() : "",
    home_second_heading: settings ? String(settings.homeHeading2).trim() : "",
    short_description: settings ? String(settings.shortDescription).trim() : "",
    address_status: settings ? Boolean(settings.addressStatus) : false,
    address: settings ? String(settings.address).trim() : false,
    status_fun_facts: settings ? Boolean(settings.statusFunFacts) : false,
    status_jokes: settings ? Boolean(settings.statusJokes) : false,
    jokes_image: settings ? String(settings.jokesImage).trim() : "",
    status_ordering: settings ? Boolean(settings.statusOrdering) : false,
  };
  if (settings.funFacts?.length > 0) {
    sanitizedSettings.fun_facts = settings.funFacts.map((funFact) =>
      normalizeFunFact(funFact)
    );
  }
  if (settings.jokes?.length > 0) {
    sanitizedSettings.jokes = settings.jokes;
  }
  return sanitizedSettings;
}
