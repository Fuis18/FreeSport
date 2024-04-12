"use strict";
// Variables
let form = document.querySelector(".container");
let fragment = document.createDocumentFragment();
let veces = 11;
// Funciones
// Contrucción del titulo de cada boton
const buildH3 = (i) => {
  "use strict";
  if (i == 1)  return "Camisetas";
  if (i == 2)  return "Pantalones";
  if (i == 3)  return "Calzado";
  if (i == 4)  return "Shorts";
  if (i == 5)  return "Brasieres";
  if (i == 6)  return "Chándales";
  if (i == 7)  return "Ropa de Compresión";
  if (i == 8)  return "Medias";
  if (i == 9)  return "Guantes";
  if (i == 10) return "Deportes Específicos";
  if (i == 11) return "Accesorios";
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
    // document.querySelector("body").style.overflow = "hidden";
    // let modalBack = document.createElement("DIV");
    // modalBack.classList.add("modal-background");
    // let modal = document.createElement("DIV");
    // modal.classList.add("modal");
    // modalBack.append(modal);
    // document.querySelector("main").append(modalBack);
    let a = document.createElement("a");
    a.href = `pages/${i}/index.html`;
    a.click();
  });
  div.appendChild(img);
  div.appendChild(text);
  form.appendChild(div);
}
