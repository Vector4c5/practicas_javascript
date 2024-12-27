const calificacion = 60;

if (calificacion == 10){
    console.log(`Excelente :D!!`);
}
else if (calificacion == 9){
    console.log(`Muy bien ;D`);
}
else if (calificacion == 8){
    console.log(`Bien, pero puede mejorar`);
}
else if (calificacion == 6 || calificacion ==7){
    console.log(`Regular, necesitas aplicarte`);
}
else if (calificacion <= 5 && calificacion >= 0){
    console.log(`Haz reprobado y eres una decepcion para esta sociedad`);
}
else{
    console.log(`Calificacion invalida, Acaso eres maestro?`)
}