
let prueba = [
  [5, 3, 4,  6, 7, 8,  9, 1, 2],
  [6, 7, 2,  1, 9, 5,  3, 4, 8],
  [1, 9, 8,  3, 4, 2,  5, 6, 7],
  
  [8, 5, 9,  7, 6, 1,  4, 2, 3],
  [4, 2, 6,  8, 5, 3,  7, 9, 1],
  [7, 1, 3,  9, 2, 4,  8, 5, 6],
  
  [6, 9, 1,  5, 3, 7,  2, 8, 4],
  [2, 8, 7,  4, 1, 9,  6, 3, 5],
  [3, 4, 5,  2, 8, 6,  1, 7, 9]];

console.log(prueba);

//comparacion 
var numero = 0;
var se_repiten = false;
for(i = 0; i < 9; i++){
	let x = 1
	for(j = 0; j < 9; j++){
		numero = prueba[i][j];
		for (let linea = x; linea < 9; linea++) {
			if (numero == prueba[i][linea]) {
				se_repiten = true;
			}
		}
		x++;
	}
}

numero = 0;
for(j = 0; j < 9; j++){
	let y = 1
	for(i = 0; i < 9; i++){
		numero = prueba[i][j];
		for (let columna = y; columna < 9; columna++) {
			if (numero == prueba[columna][j]) {
				se_repiten = true;
			}
		}
		y++;
	}
}

if(se_repiten == true){
	console.log("la solucion no es correcta");
}else{
	console.log("La solucion es correcta");
}