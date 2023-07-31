export default function normalizeFunFact(funFact = null) {
  const sanitizedFunFact = {
    text: funFact ? String(funFact.text).trim().toLowerCase : "",
    status: funFact ? Bolean(funFact.status) : false,
  };

  if (funFact.id) {
    sanitizedFunFact.id = Number(funFact.id);
  }

  return sanitizedFunFact;
}
