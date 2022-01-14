//console.log es de depuracion
//console.info no, es de informacion, aunque lo tira igual al resultado
//console.clear te limpia la consola
//console.table creas una tabla con un array, tipo index de un lado y el  value
//console.warn no se usa tanto, pero se puede usar como p mostrarte un msj de advertencia
//lo anterior son funciones de registro
//ahora abajo toca ver funciones de conteo:

//esto es para estilizar en la consola: console.log("%holis","color:blue;background:black;padding:20px;border 3px solid yellow;")

//----------------------------------------------------
const materias = {  //usamos const porque las notas cerraron asi y no van a cambiar
    fisica: [90,6,4,"fisica"], //creamos un array, con asistencia(%), promedio de nota, trabajos practicos 4=%100
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    BDD: [98,9,1,"BDD"],
    algebra: [100,10,4,"algebra"], //re crack en algebra
}
const aprobo = () =>{
    for (materia in materias) {

        let asistencias = materias[materia][0]; 
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        
        console.log(materias[materia][3]);
        
        if (asistencias >= 90) {
            console.log("%c    Asistencias en orden", "color:green");
        } else {
            console.log("%c    Falta de Asistencias", "color:red");
        }
        if (promedio >= 7) {
        console.log("%c Promedio en orden", "color:green");
        } else {
            console.log("%c Promedio desaprobado", "color:red");
        }
        if (trabajos >=3) {
            console.log("%c   Trabajos prácticos en Orden", "color:green");
        } else {
            console.log("%c   Faltan trabajos practicos", "color:red");
        }
    }
}

aprobo()







