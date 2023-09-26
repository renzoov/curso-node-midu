// Para los modulos de Node que no tengan promesas nativas
// pueden usar promisify

// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf8").then((text) => {
  console.log("primer texto:", text);
});

console.log("Hacer otra cosa mientras lee el primer archivo");

console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto:", text);
});
