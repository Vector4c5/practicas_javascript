const numero1 = 8;
const numero2 = 11;
const numero3 = 10;

if (numero1 == numero2 && numero1 == numero3) {
    console.log(`Los tres numeros son iguales`);
} 
else if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número mayor es el numero 1`);
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número mayor es el numero 2`);
}
else {
    console.log(`El número mayor es el numero 3`);
    
}