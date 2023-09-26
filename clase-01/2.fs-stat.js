const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // sis es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
);
