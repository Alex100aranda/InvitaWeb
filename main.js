document.getElementById('nav-toggle').addEventListener('click', function () {
  document.getElementById('nav').querySelector('.nav-list').classList.toggle('active');
});


function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const comentarios = document.getElementById("comentarios").value.trim();

  const mensaje = `Hola, mi nombre es ${nombre}. Mi número es ${telefono}. Me gustaría más información sobre las invitaciones digitales. Comentarios: ${comentarios}`;
  
  const numeroWhatsApp = "5211234567890"; // ← Reemplaza con tu número
  const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(enlace, "_blank");
  return false; // Evita el envío real del formulario
}

