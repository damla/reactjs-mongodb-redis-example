const slugify = (str) =>
  str
    .toLowerCase()
    .replace(" ", "-")
    .replace(/Ü/gim, "u")
    .replace(/Ş/gim, "s")
    .replace(/I/gim, "i")
    .replace(/İ/gim, "i")
    .replace(/Ö/gim, "o")
    .replace(/Ç/gim, "c")
    .replace(/ğ/gim, "g")
    .replace(/ü/gim, "u")
    .replace(/ş/gim, "s")
    .replace(/ı/gim, "i")
    .replace(/ö/gim, "o")
    .replace(/ç/gim, "c");

export default slugify;
