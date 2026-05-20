function mostrarDetalles() {
  document.getElementById('detalles').style.display = 'block';
}

// Crear globos dinámicamente
window.onload = function() {
  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon " + (i % 2 === 0 ? "blue" : "");
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(balloon);
  }
}
// Confeti animado
function lanzarConfeti() {
  const colores = ["#0033a0", "#ffd700", "#ffffff"];
  for (let i = 0; i < 100; i++) {
    let confeti = document.createElement("div");
    confeti.className = "confeti";
    confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    confeti.style.left = Math.random() * window.innerWidth + "px";
    confeti.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(confeti);

    setTimeout(() => confeti.remove(), 5000);
  }
}

// Lanzar confeti al abrir la invitación
function mostrarDetalles() {
  document.getElementById('detalles').style.display = 'block';
  lanzarConfeti();
}
