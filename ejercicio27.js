// Variables con las palabras a comparar
let palabra1 = "amor";
let palabra2 = "romar";

// Normalización: eliminar espacios y convertir a minúsculas
palabra1 = palabra1.replace(/\s+/g, '').toLowerCase();
palabra2 = palabra2.replace(/\s+/g, '').toLowerCase();

// Verificar si tienen la misma longitud
let sonAnagramas = palabra1.length === palabra2.length;

if (sonAnagramas) {
    // Convertir las palabras a arrays, ordenarlas y unirlas nuevamente a cadenas
    let palabra1Ordenada = palabra1.split('').sort().join('');
    let palabra2Ordenada = palabra2.split('').sort().join('');

    // Comparar las palabras ordenadas
    sonAnagramas = palabra1Ordenada === palabra2Ordenada;
}

// Imprimir el resultado
console.log(sonAnagramas); // true o false dependiendo de si son anagramas
