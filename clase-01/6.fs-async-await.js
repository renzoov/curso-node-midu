const { readFile } = require("node:fs/promises");

async function init() {
  console.log("Leyendo el primer archivo");
  const text = await readFile("./archivo.txt", "utf8");
  console.log("primer texto:", text);
  console.log("Hacer otra cosa mientras lee el primer archivo");
  console.log("Leyendo el segundo archivo");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto:", secondText);
}

init();

// IIFE --> Inmediatly Invoked Function Expression
// (async () => {
//   console.log("Leyendo el primer archivo");
//   const text = await readFile("./archivo.txt", "utf8");
//   console.log("primer texto:", text);

//   console.log("Hacer otra cosa mientras lee el primer archivo");

//   console.log("Leyendo el segundo archivo");
//   const secondText = await readFile("./archivo2.txt", "utf-8");

//   console.log("segundo texto:", secondText);
// })();
