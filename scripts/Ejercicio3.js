console.log("Ejercicio 3");

function accionBotonUno() {
  alert("Haz hecho click en el botón 1, por eso estoy saliendo en tu pantalla");
}

function accionBotonDos() {
  alert(
    "Haz hecho docle click en el botón 2, por eso estoy saliendo en tu pantalla"
  );
}

function accionBotonTres() {
  alert(
    "Haz pasado tu curso sobre el botón 3, por eso estoy saliendo en tu pantalla"
  );
  document.getElementById("btn-3").innerText = "Ya pasaste el mouse";
  console.log("Puedes hacer más cosas con eventos :D");
}
