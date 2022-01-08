//vamos a realizar las funciones que nos hagan la suma, resta, division y multiplicación.
class Calculadora { //le agregue esto para repasar poo, sino se puede usar metodods estaticos
	constructor(){
	}
sumar(num1,num2){
	return parseInt(num1) + parseInt(num2); //como le pedimos datos por un prompt le colocalmos un parseInt
}
restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
	return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
	return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp){ //o sino poner num**exp
	let numero = num;
	for (var i = 1; i < exp; i++) {
		numero = numero * num;
	}
	return numero;
}
raizCuadrada(num){
	return Math.sqrt(num); //sqrt es para calcular la raíz cuadrada
}
raizCubica(num){
	return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación,  5: potenciación,  6: raíz cuadrada,  7: raíz cúbica");

if (operacion == 1) {
	let numero1 = prompt("primer número para sumar");
	let numero2 = prompt("segundo número para sumar");
	resultado = calculadora.sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);//alt+96 = te da el bacl sprint ` `
}
else if (operacion == 2) {
	let numero1 = prompt("primer número para restar");
	let numero2 = prompt("segundo número para restar");
	resultado = calculadora.restar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("primer número para dividir");
	let numero2 = prompt("segundo número para dividir");
	resultado = calculadora.dividir(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer número para multiplicar");  //demasiado prompt puede ser, se puede poner como sugirio dalto  "primer número para operar y después segundo número para operar"
	let numero2 = prompt("segundo número para multiplicar");
	resultado = calculadora.multiplicar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
	let numero1 = prompt("numero a potenciar");
	let numero2 = prompt("exponente");
	resultado = calculadora.potenciar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
	let numero1 = prompt("conocer la raíz cuadrada de:");
	resultado = calculadora.raizCuadrada(numero1)
	alert(`tu resultado es ${resultado}`);
}

else if (operacion == 7) {
	let numero1 = prompt("conocer la raíz cúbica de:");
	resultado = calculadora.raizCubica(numero1)
	alert(`tu resultado es ${resultado}`);
}

else {
	alert("no se ha encontrado la operación")
}
