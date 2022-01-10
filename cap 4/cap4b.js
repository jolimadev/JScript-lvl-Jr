const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const obtenerInformacion = (materia)=>{

if (materias[materia] !== undefined){
    return [materias[materia],materia,materias];
} else {
    return materias;
}
}

const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);

if (informacion !== false) {
let profesor = informacion[0][0];
alumnos = informacion[0];
alumnos.shift();          //para sacar el primer elemento anterior, y en el siguiente array lo almacena
document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>                  
    `); //muestra alumnos en azul y profes en rojo y despies pasa a la siguiente clase
}
}

const cantidadDeClases = (alumno)=>{
let informacion = obtenerInformacion();
let clasesPresentes = [];  //agregue un array
let cantidadTotal = 0;
for (info in informacion) {
    if (informacion[info].includes(alumno)) {
        cantidadTotal++;
        clasesPresentes.push(" "+ info); //info es lo que contiene el nombre de las clases y push nos agrega un elemento al array
    }
}
return `<b style='color:blue'>
${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
<br><br>
`; //me figura la oración en Q clases estan en color verde
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))  //me tira en cuantas clases esta cofla y abajo pedro, puedo ir cambiando de alumn y el sistema igual funciona
document.write(cantidadDeClases("pedro"))