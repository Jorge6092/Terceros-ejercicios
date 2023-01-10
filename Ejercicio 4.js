
let myArray = new Array(3);
//arreglo 1
var num = 0;
for(var i = 0; i < 3; i++) {
	myArray[i] = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		myArray [i][j] = num;
		num++;
	}
}
console.log(myArray);

//arreglo 2
myArray = new Array(3);
num = 0;
let aumento = 1;
for(i = 0; i < 3; i++) {
	myArray [i] = new Array(4);
	for(j = 0; j < 4; j++){
		myArray [i][j] = num;
		num = aumento + num;
		aumento += 2;
	}
}
console.log(myArray);

//arreglo 3
myArray = new Array(4);
for(i = 0; i < 4; i++){
	myArray [i] = new Array(3);
	num = i;
	for(j = 0; j < 3; j++){
		myArray[i][j] = num;
		num+=4;
	}
}
console.log(myArray);

//arrelgo 4
myArray = new Array(3);
num = 0;
for(i = 0; i < 3; i++){
	myArray [i] = new Array(3);
	for(j = 0; j < 4; j++){
		if(j < 3){
			myArray[i][j] = num;
			num++;;
		}else{
			num++;
		}
	}
}
console.log(myArray);

//arreglo 5
myArray = new Array(4);
num = 11.5;
for(i = 0; i < 4; i++){
	myArray [i] = new Array(3);
	for(j = 0; j < 3; j++){
		myArray[i][j] = num;
		num--;
	}
}
console.log(myArray);

//arreglo 6
myArray = new Array(3);
num = 0;
for(var i = 0; i < 3; i++) {
	myArray[i] = new Array(4);
	let columna = 100;
	for (var j = 0; j < 4 ; j++) {
		myArray[i][j] = num + columna;
		num++;
		columna += 100;

	}
}
console.log(myArray);

//arreglo 7
myArray = new Array(3);
num = 0;
var fila = 100;
for(var i = 0; i < 3; i++) {
	myArray[i] = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		myArray [i][j] = num + fila;
		num++;
	}
	fila += 100;
}
console.log(myArray);