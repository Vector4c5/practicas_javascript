// Requerimos el módulo readline para interactuar con la terminal
const readline = require('readline');

// Creamos una interfaz para leer y escribir en la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos el número al usuario
rl.question('Por favor, ingresa un número: ', (input) => {
  // Convertimos la entrada a número
  const number = parseFloat(input);

  // Verificamos si la entrada es un número válido
  if (isNaN(number)) {
    console.log('Eso no es un número válido.');
  } else {
    // Verificamos si el número está en el rango de 1 a 100
    if (number >= 1 && number <= 100) {
      console.log('Número válido');
    } else {
      console.log('Número fuera de rango');
    }
  }

  // Cerramos la interfaz
  rl.close();
});
