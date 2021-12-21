let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {  //aca depende la Q de alumn q ingrese, entonces se ejecutara ese for el n° Q que figura en "cantidad"
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0] //el primero tendra 0 y después se le va a ir sumando de a 1.
}//esto se va a ir ejectucando hasta que temrine la cantidad de alumnos seleccionada.

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){ //p mayuscula x si les pinta poner la p en mayuscula//cuando esto se ejecute, la persona encargada de tomar la lista pondra el ausente o prsente de acuerdo a c/alumno
        alumnosTotales[p][1]++; //lo que hablamos del array bidimensional, lo que hacemos es acceder a un elemento del array que esta dentro de otro array.
    }
}

for  (i = 0; i <30; i++) { //Este bucle se ejecutara 30 veces x los 30 días
    for (alumno in alumnosTotales){ //el in nos pasa la posición, si fuera "of" nos pasa el valor
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales) { //el br lo lee html
    let resultado = `${alumnosTotales[alumno][0]}:<br>   
    __________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>  
    __________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`; //el tag <b> es p poner letra negrita
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>"; //acordate que elstyle va en el css no seas perezoso, aca fue una excepción nomas, y a que me enfoco en resolver el ejercicio, a que hacer una interfaz colorida.. :D
    } else {
        resultado += "<br> <br>"
    } document.write (resultado);
}

