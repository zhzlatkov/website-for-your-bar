export async function isAuthorized() {
  const token = localStorage.getItem("authToken");

  return await fetch("/api/is-authorized", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : null,
    },
  });
}
