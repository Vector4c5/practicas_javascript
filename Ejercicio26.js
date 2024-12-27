const numero = 121; 
const cadena = numero.toString(); 
let cadenaInvertida = ""; 

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}

if (cadena === cadenaInvertida) {
    console.log(`${numero} es un número palíndromo.`);
} else {
    console.log(`${numero} no es un número palíndromo.`);
}
