"use strict";
// Variables
let form = document.querySelector(".container");
let fragment = document.createDocumentFragment();
let clothes = [
  { src: "r1", mark: "Apl", price: "18", units: "6", color: "Roja", info: "Short Rojo Deportivo Workout"},
  { src: "r2", mark: "Omg", price: "20", units: "6", color: "Roja", info: "Short Rojo de Wntrenamiento"},
  { src: "g1", mark: "Rby", price: "19", units: "6", color: "Verde", info: "Short Deportivo Legacy Verde Militar"},
  { src: "g2", mark: "Jhb", price: "20", units: "6", color: "Verde", info: "Short Deportivo Verde Ligero"},
  { src: "b1", mark: "Xam", price: "23", units: "6", color: "Azul", info: "Short Azul Running"},
  { src: "b2", mark: "Omg", price: "21", units: "6", color: "Azul", info: "Short Azul Deportivo Workout"},
  { src: "w1", mark: "Rby", price: "16", units: "6", color: "Blanca", info: "Short Deportivo Blanco"},
  { src: "w2", mark: "Apl", price: "20", units: "6", color: "Blanca", info: "Bermuda Playera en Degradé"},
  { src: "k1", mark: "Jhb", price: "22", units: "6", color: "Negra", info: "Shorts Negro Camuflaje Playa"},
  { src: "k2", mark: "Xam", price: "17", units: "6", color: "Negra", info: "Short Deportivo Negro"},
];
// Funciones
// Contrucción del titulo de cada boton
const buildH3 = (i) => {
  "use strict";
  console.log(clothes[i]);
};
// Ejecucción
for (let i = 0; i <= clothes.length - 1; i++) {
  let j = clothes[i];
  let div = document.createElement("DIV");
  div.classList.add("form__div");
  let img = document.createElement("IMG");
  img.src = `images/${j.src}.png`;
  let text = document.createElement("P");
  text.textContent = j.info;
  div.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    let modalBack = document.createElement("DIV");
    modalBack.classList.add("modal-background");
    let modal = document.createElement("DIV");
    modal.classList.add("modal");
    let h2 = document.createElement("H2");
    h2.classList.add("modal__h2");
    h2.textContent = j.info;
    let close = document.createElement("INPUT");
    close.classList.add("modal__close");
    close.type = "button";
    close.value = "X";
    close.addEventListener("click", () => {
      document.querySelector(".modal-background").remove();
      document.body.style.overflow = "auto";
    });
    let content = document.createElement("DIV");
    content.classList.add("modal__content");
    let picture = document.createElement("IMG");
    picture.src = `images/${j.src}.png`;
    picture.classList.add("modal__picture");
    let info = document.createElement("DIV");
    info.classList.add("modal__info");
    let left = document.createElement("DIV");
    left.classList.add("modal__info-left");
    let right = document.createElement("DIV");
    right.classList.add("modal__info-right");
    let mark = document.createElement("DIV");
    mark.textContent = `Vendido por ${j.mark}`;
    mark.classList.add("modal__info-mark");
    let color = document.createElement("DIV");
    color.textContent = `Color: ${j.color}`
    color.classList.add("modal__info-color");
    let size = document.createElement("DIV");
    size.textContent = `Talla: M`
    size.classList.add("modal__info-size");
    let send = document.createElement("DIV");
    send.classList.add("modal__info-send");
    let sites = document.createElement("DIV");
    sites.classList.add("modal__info-sites");
    let price = document.createElement("DIV");
    price.textContent = `S/. ${j.price}.80`
    price.classList.add("modal__info-price");
    let units = document.createElement("DIV");
    units.classList.add("modal__info-units");
    let counter = document.createElement("DIV");
    counter.classList.add("modal__info-counter");
    let decre = document.createElement("button");
    decre.textContent = "-";
    let count = document.createElement("Input");
    count.type = "number";
    count.max = j.units;
    count.min = 1;
    count.value = 1;
    count.classList.add("modal__info-count");
    let incre = document.createElement("button");
    incre.textContent = "+";
    let max_units = document.createElement("DIV");
    max_units.textContent = `Máximo ${j.units} unidades`;
    max_units.classList.add("modal__info-max-units");
    incre.addEventListener("click", () => count.value < j.units ? count.value++ : 0);
    decre.addEventListener("click", () => count.value > 1 ? count.value-- : 0);
    count.addEventListener("keyup", () => {
      if (parseInt(count.value) > parseInt(j.units)) count.value = j.units;
      else if (parseInt(count.value) < 1) count.value = 1;
    })
    let buy = document.createElement("button");
    buy.textContent = "Comprar";
    buy.classList.add("modal__info-buy");
    left.append(mark);
    left.append(color);
    left.append(size);
    left.append(send);
    left.append(sites);
    right.append(price);
    counter.append(decre);
    counter.append(count);
    counter.append(incre);
    units.append(counter);
    units.append(max_units);
    right.append(units);
    right.append(buy);  
    info.append(left);
    info.append(right);
    content.append(h2);
    content.append(close);
    content.append(info);
    modal.append(picture);
    modal.append(content);
    modalBack.append(modal);
    document.querySelector("main").append(modalBack);
  });
  div.appendChild(img);
  div.appendChild(text);
  form.appendChild(div);
}
