export default function normalizeFunFact(funFact = null) {
  const sanitizedFunFact = {
    id: funFact ? Number(funFact.id) : undefined,
    text: funFact ? String(funFact.text).trim() : "",
    status: funFact ? Boolean(funFact.status) : false,
  };

  return sanitizedFunFact;
}
