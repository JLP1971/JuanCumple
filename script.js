function mostrarDetalles() {
  // Mostrar detalles y asistencia
  document.getElementById('detalles').style.display = 'block';
  //document.getElementById('asistencia').style.display = 'block';

  // Ocultar el botón "Abrir Invitación"
  document.getElementById('abrirInvitacion').style.display = 'none';

  // Reproducir música
  const song = document.getElementById("birthdaySong");
  song.play().catch(err => console.log("Error al reproducir:", err));

  lanzarConfeti();
  document.getElementById('asistencia').scrollIntoView({ behavior: 'smooth' });
}

function abrirFormulario() {
  document.getElementById("asistencia").style.display = "block";
  document.getElementById("asistencia").scrollIntoView({ behavior: 'smooth' });

  // Ocultar el botón "Confirmar asistencia"
  document.getElementById("abrirFormulario").style.display = "none";
}

function mensajeFinal() {
  document.getElementById("formAsistencia").style.display = "none";
  document.getElementById("asistencia").scrollIntoView({ behavior: 'smooth' });
  document.getElementById("mensajeFinal").style.display = "block";
  lanzarConfeti();
}

window.onload = function() {
  // Globos dinámicos
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
