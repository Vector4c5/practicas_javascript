const coloresManana = ['#FFD700', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFDAB9']; 
const coloresTarde = ['#FFA07A', '#FF8C00', '#FF6347', '#FF4500', '#FF7F50'];  
const coloresNoche = ['#2F4F4F', '#4B0082', '#191970', '#000080', '#00008B'];  
let indiceColor = 0;

function actualizarReloj() {
    const now = new Date();
    const horas = ('0' + now.getHours()).slice(-2);
    const minutos = ('0' + now.getMinutes()).slice(-2);
    const segundos = ('0' + now.getSeconds()).slice(-2);
    
    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
    
    let mensaje = '';
    let colorFondo = '';
    let colorTexto = '';

    if (horas >= 6 && horas < 12) {
        mensaje = '¡Buenos días! Espero tengas un grandioso dia :3';
        colorFondo = coloresManana[indiceColor];
        colorTexto = '#FF4500'; 
    } else if (horas >= 12 && horas < 18) {
        mensaje = '¡Buenas tardes! sigue esforzandote, falta poco para descansar :D';
        colorFondo = coloresTarde[indiceColor];
        colorTexto = '#8B4513'; 
    } else if (horas >= 18 && horas < 21) {
        mensaje = '¡Buenas noches!  Lavate la cara y acuestate, mañana sera otro dia UwU';
        colorFondo = coloresNoche[indiceColor];
        colorTexto = '#FFFACD'; 
    } else {
        mensaje = '¡Hora de dormir! No te desveles, recuerda que mañana te espera un gran dia :D';
        colorFondo = coloresNoche[indiceColor];
        colorTexto = '#F0E68C'; 
    } 
    
    document.getElementById('mensaje').textContent = mensaje;
    document.body.style.backgroundColor = colorFondo;
    document.body.style.color = colorTexto;

    indiceColor = (indiceColor + 1) % 5; 
}

setInterval(actualizarReloj, 2000); 
