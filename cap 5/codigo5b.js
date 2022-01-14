//calculamos todo y dividimos
//35  por dia para las cosas de la casa
// 100-103 min trabajos
// 10 min descanso
// 100 min estudiar
// 240min trabajo

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos prácticos";
let homework = "30 minutos de quehaceres";
let descanso = "10 minutos de descanso";

console.log ("TAREAS");

for (var i = 0; i < 14; i++) {  //hacemos un bucle para qur se cumple su rutina por 2 semanas = 14 días
    if (i == 0) {
        console.group ("semana 1")
    }
console.groupCollapsed("dia " + (i+1)); //el collapsed me agrupa las semanas y los días, asi hago click y veo que tengo q hacer cada semana y día. (mas organizado bro)
console.log("descanso");
console.log("estudio");
console.log("tp");
console.log("homework");
console.groupEnd(); //aca cerramos el grupo, el comando que nos sirve para agrupar
if (i == 7) {
        console.groupEnd(); // cerramos el de la semana1
        console.groupCollapsed("semana 2")
    
}
}

console.groupEnd(); //cerramos todo
console.groupEnd();