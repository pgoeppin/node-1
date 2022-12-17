const fs = require("fs");
const registrar = (
  nombreMascota,
  edadMascota,
  tipoMascota,
  colorMascota,
  enfermedadMascota
) => {
// Leer archivos con el módulo File System
  const citas = fs.readFileSync("citas.json", "utf-8");
  const cita = JSON.parse(citas);
  cita.push({
    nombre: nombreMascota,
    edad: edadMascota,
    tipo: tipoMascota,
    color: colorMascota,
    enfermedad: enfermedadMascota,
  });
//   Crear archivos con el módulo File System
  fs.writeFileSync("citas.json", JSON.stringify(cita));
};

const leer = () => {
  const citas = fs.readFileSync("citas.json", "utf-8");
  JSON.parse(citas).forEach((cita) => {
    console.log(cita);
  });
};

module.exports = { registrar, leer };
