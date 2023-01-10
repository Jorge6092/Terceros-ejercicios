let tob, chop, son;
tob = new Array (3);
for (let i = 0; i < 3; i++) {
    tob[i]= prompt("ingrese el vector 1"+ "(" +(i+1)+")" );
}
chop = new Array (3);
for (let i = 0; i < 3; i++) {
    chop[i]= prompt("ingrese el vector 2"+ "(" +(i+1)+")");
    
}
son = ((tob[0] * tob[1]) + (chop[0] * chop[1]) + (tob[2] * chop[2]))
if (son == 0) {
    console.log ("a y b son ortogonales ")
} else {
    console.log ("El producto interno entre a y b: ")
    console.log (son)
    console.log ("a y b no son ortogonales")
}
