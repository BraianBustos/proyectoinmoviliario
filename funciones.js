const flecha1 = document.querySelector(".flecha1");
const oscuro = document.querySelector(".oscuro");
const opciones = document.querySelector(".opciones");
const buscventa = document.querySelector(".buscventa");
const menu = document.querySelector(".menu");
const menuoscuro = document.querySelector(".menuoscuro");
const logo = document.querySelector(".logo");
const logooscuro = document.querySelector(".logooscuro");
const mitadlogo = document.querySelector(".mitadlogo");
const mitadnombre = document.querySelector(".mitadnombre");
const mitadnombre2 = document.querySelector(".mitadnombre2");
const botalquiler = document.getElementById("rate-2");
const botventa = document.getElementById("rate-1");

menu.addEventListener("click",()=>{
    menu.style.zIndex = "50";
    oscuro.style.display = "block";
    menuoscuro.style.display = "block";
    logo.style.display = "none";
    mitadlogo.style.display = "block";
    logooscuro.style.display = "block";
    mitadnombre.style.display = "inline";
    mitadnombre2.style.display = "block";
})

flecha1.addEventListener("click",()=>{
    oscuro.style.display = "block";
    opciones.style.display = "block";
});

oscuro.addEventListener("click",()=>{
    oscuro.style.display = "none";
    opciones.style.display = "none";
    menuoscuro.style.display = "none";
    logo.style.display = "block";
    mitadlogo.style.display = "none";
    mitadnombre.style.display = "none";
    mitadnombre2.style.display = "none";
});

botalquiler.addEventListener("click",()=>{
    buscventa.innerHTML = "Alquiler";
});

botventa.addEventListener("click",()=>{
    buscventa.innerHTML = "Venta";
});





