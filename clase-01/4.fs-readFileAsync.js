const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf8", (err, text) => {
  console.log(text);
});

console.log("Hacer otra cosa mientras lee el primer archivo");

console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});
