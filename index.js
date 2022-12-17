// Importar y exportar módulos en Node Js
const { registrar, leer } = require("./operaciones.js");

const args = process.argv.slice(2);

const operacion = args[0];
const nombreMascota = args[1];
const edadMascota = args[2];
const tipoMascota = args[3];
const colorMascota = args[4];
const enfermedadMascota = args[5];

if (operacion === "registrar") {
  if (
    !nombreMascota ||
    !edadMascota ||
    !tipoMascota ||
    !colorMascota ||
    !enfermedadMascota
  ) {
    console.log(
      "Faltan argumentos. Argumentos son: nombre, edad, tipo, color, enfermedad"
    );
  } else {
    registrar(
      nombreMascota,
      edadMascota,
      tipoMascota,
      colorMascota,
      enfermedadMascota
    );
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log(
    "Por favor ingrese correctamente los parametros: operacion (que puede ser registrar o leer), nombre, edad, tipo, color, enfermedad"
  );
}
