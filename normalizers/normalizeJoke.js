export default function normalizeJoke(joke = null) {
  const sanitizedJoke = {
    author: joke ? String(joke.author).trim().toLowerCase : "",
    place: joke ? String(joke.place).trim().toLowerCase : "",
    text: joke ? String(joke.text).trim().toLowerCase : "",
    status: joke ? Bolean(joke.status) : false,
  };

  if (joke.id) {
    sanitizedJoke.id = Number(joke.id);
  }

  return sanitizedJoke;
}
