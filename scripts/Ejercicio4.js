console.log("Ejercicio 4");
/* function name() {

} */

/* Funciones flecha - ES6 */

const formulario = () => {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  if (nombre === "") {
    alert("El campo nombre no debe de ir vacio");
  } else if (apellido === "") {
    alert("El campo apellido no debe de ir vacio");
  } else {
    const persona = {
      nombre: nombre,
      apellido: apellido,
    };

    console.log(persona);

    document.getElementById("gracias").innerHTML = `
        <h1>Muchas gracias ${persona.nombre}!! Se ha enviado el formulario correctamente 🥳</h1>
        `;
  }
};
