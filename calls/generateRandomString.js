export default function generateRandomString(len = 16, withSymbols = false) {
  let alphameric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (withSymbols) {
    alphameric += '!@#$%^&*()+=-_";';
  }

  let string = [];

  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * alphameric.length);
    string.push(alphameric.charAt(index));
  }

  return string.join("");
}
