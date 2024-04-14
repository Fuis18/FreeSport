"use strict";
// Variables
let form = document.querySelector(".container");
let fragment = document.createDocumentFragment();
let veces = 7;
// Funciones
// Contrucción del titulo de cada boton
const buildH3 = (i) => {
  "use strict";
  if (i == 1)  return "Camisetas";
  if (i == 2)  return "Pantalones";
  if (i == 3)  return "Calzado";
  if (i == 4)  return "Shorts";
  if (i == 5)  return "Chaquetas";
  if (i == 6)  return "Ropa de Compresión";
  if (i == 7) return "Accesorios";
};
// Ejecucción
for (let i = 1; i <= veces; i++) {
  let div = document.createElement("DIV");
  div.classList.add("form__div");
  let img = document.createElement("IMG");
  img.src = `images/${i}.png`;
  let text = document.createElement("P");
  text.textContent = buildH3(i);
  div.addEventListener("click", () => {
    let a = document.createElement("a");
    a.href = `pages/${i}/index.html`;
    a.click();
  });
  div.appendChild(img);
  div.appendChild(text);
  form.appendChild(div);
}
