var tamaño = parseInt(prompt("Inserta el tamaño"));
var cuadrado = new Array(tamaño), numeros = new Array(Math.pow(tamaño,2));
b = 0;
for(var i = 0; i < tamaño; i++){
	cuadrado [i]= new Array(tamaño);
	for(var j = 0; j < tamaño; j++){
		numeros[b] = parseInt(prompt("Ingresa los valores uno por uno"+""+(i+1)+":"));
		cuadrado [i][j] = numeros[b];
		b++;
	}
}
console.log(cuadrado);
let iguales = true;

//sumas
let suma_filas = new Array(tamaño);
for(i = 0; i < tamaño; i++){
	var suma = 0;
	for(j = 0; j < tamaño; j++){
		suma+=cuadrado[i][j];
	}
	suma_filas[i] = suma; 
}
console.log(suma_filas);

let suma_columnas = new Array(tamaño);
for(j = 0; j < tamaño; j++){
	suma = 0;
	for(i = 0; i < tamaño; i++){
		suma+=cuadrado[i][j];
	}
	suma_columnas[j] = suma;
}
console.log(suma_columnas);

let diagonal_1 = 0;
j = 0;
for(i = 0; i < tamaño; i++){
	diagonal_1 = cuadrado[i][j] + diagonal_1;
	j++;
}

//suma de diagonal atras frente
let diagonal_2 = 0;
j = tamaño;
for(i = 0; i < tamaño; i++){
	j--;
	diagonal_2 = cuadrado[i][j] + diagonal_2;
}


//Verificacion
for(i = 1; i < tamaño; i++){
	if(suma_filas[0] != suma_filas[i]){
		iguales = false;
	}
}

for(i = 1; i < tamaño; i++){
	if(suma_columnas[0] != suma_columnas[i]){
		iguales = false;
	}
}

if (diagonal_1 != diagonal_2) {
	iguales = false;
}

if(iguales == true){
	console.log("Si es un cuadrado magico");
}else{
	console.log("No es un cuadrado magico");
}

//numeros consecutivos

numeros.sort();
let consecutivos = true;
for (b = 0; b < numeros.length - 1; b++) {
	if (numeros[b] + 1 != numeros[b+1]){
		consecutivos = false; 
		break;
	}
}

if(consecutivos == true){
	console.log("Tienen numeros consecutivos:");
}else{
	console.log("No tienen numeros consecutivos:");
}

