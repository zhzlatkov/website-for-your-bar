export default function normalizeFunFact(funFact = null) {
  const sanitizedFunFact = {
    text: funFact ? String(funFact.text).trim().toLowerCase : "",
    status: funFact ? Bolean(funFact.status) : false,
  };

  return sanitizedFunFact;
}
