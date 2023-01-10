let num1, num2;
num1 = prompt ("ingresa cuantos numeros quieres leer"); 

let elementos = new Array (num1);
for (let i = 0; i < num1; i++) {
    elementos [i] = prompt("ingresa los datos uno por uno" + (i+1))
}
num2 = prompt ("Dime el numero con el que se van a comparar");
function bdan(elemento) {
    return elemento >= elementos;
  }
let filtrados = (elementos.filter(bdan).length);
if (filtrados == 1) {
    console.log("De tu lista " + filtrados + " valor es mayor a " + num2)
} else {
    console.log("De tu lista " + filtrados + " valores son mayores a " + num2)
}
