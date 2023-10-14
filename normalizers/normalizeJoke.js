export default function normalizeJoke(joke = null) {
  const sanitizedJoke = {
    id: joke && joke.id ? Number(joke.id) : undefined,
    author: joke ? String(joke.author).trim().toLowerCase() : "",
    place: joke ? String(joke.place).trim().toLowerCase() : "",
    text: joke ? String(joke.text).trim() : "",
    status: joke ? Boolean(joke.status) : false,
  };

  if (joke?.id) {
    sanitizedJoke.id = Number(joke.id);
  }

  return sanitizedJoke;
}
