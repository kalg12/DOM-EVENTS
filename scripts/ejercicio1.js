console.log("Ejercicio 1");

const myName = "Kevin Luciano";

document.getElementById("encabezado").innerText =
  "Hola, este es un texto que estoy metiendo desde un archivo de JavaScript";

document.getElementById("encabezado-H2").innerText =
  "Hola, yo soy un encabezado de tipo h2";

document.getElementById("HTML").innerHTML = `
<h1>Aquí puedo meter mi texto sin problemas</h1>
<img src="https://i.ytimg.com/vi/hMJDRbMkGAQ/maxresdefault.jpg" alt="SE TERMINÓ EL AÑO 2022">
<h5>Ejercicio realizado por ${myName}</h5>
`;
