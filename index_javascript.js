function actualizarReloj() {
    const now = new Date();
    const horas = ('0' + now.getHours()).slice(-2);
    const minutos = ('0' + now.getMinutes()).slice(-2);
    const segundos = ('0' + now.getSeconds()).slice(-2);
    
    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
    
    let mensaje = '';
    let colorFondo = '';

    if (horas >= 6 && horas < 12) {
        mensaje = '¡Buenos días!';
        colorFondo = '#FFD700'; // Dorado
    } else if (horas >= 12 && horas < 18) {
        mensaje = '¡Buenas tardes!';
        colorFondo = '#FFA07A'; // Salmón claro
    } else if (horas >= 18 && horas < 21) {
        mensaje = '¡Buenas noches!';
        colorFondo = '#FF4500'; // Rojo anaranjado
    } else {
        mensaje = '¡Hora de dormir!';
        colorFondo = '#2F4F4F'; // Gris oscuro
    }
    
    document.getElementById('mensaje').textContent = mensaje;
    document.body.style.backgroundColor = colorFondo;
}

setInterval(actualizarReloj, 1000);
