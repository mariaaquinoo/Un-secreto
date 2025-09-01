const boton = document.getElementById("boton");
const mensajeDiv = document.getElementById("mensaje");

const lineas = [
  "Un recordatorio de que alguien piensa en vos y se tomó el tiempo de hacer esto",
  "Que tengas un día genial",
  "Y sonrías mucho (pensando en mí obvio)",
  "Bss",
  "Bye, JAJAAJJAAJ"
];

let index = 0;

boton.addEventListener("click", () => {
  if (index < lineas.length) {
    const p = document.createElement("p");
    p.classList.add("linea");
    p.textContent = lineas[index];
    mensajeDiv.appendChild(p);

    // Animación al aparecer
    setTimeout(() => {
      p.classList.add("mostrar");
    }, 10);

    index++;

    if(index === lineas.length){
      boton.style.display = "none"; // Oculta el botón al final
    }
  }
});
