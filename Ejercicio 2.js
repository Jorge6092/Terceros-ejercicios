let dato1, suma, division;
dato1 = prompt("¿Cuantos datos vas a ingresar?");
let Array1 = new Array(dato1);

for (let i = 0; i < dato1; i++) {
    Array1 [i] = parseFloat(prompt("Coloca aqui los datos" + (i+1)))
}
function ej (){ 
    num1 = 0
    num2 = Array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        num1
      );
      return num2;
}     
suma = ej();
division = (suma / dato1);

function bdan(elemento) {
    return elemento >= division;
  }
  let filtrados = (Array1.filter(bdan).length);
if (filtrados == 1) {
    console.log(filtrados + " dato es mayo que el promedio")
} else {
    console.log(filtrados + " datos son mayores que el promedio")
}