const numero = 30;
let a = 0;
let b = 1;

let resultado = a + b;

while (resultado <= numero) {
    let F = a + b;
    a = b; // Actualiza a con el valor de b
    b = F; // Actualiza b con el nuevo valor de Fibonacci
    resultado = F; // Actualiza resultado

    if (resultado == numero) {
        console.log("Has llegado al numero: " + resultado);
    } else {
        console.log("Aun no has llegado: " + resultado);
    }
}
