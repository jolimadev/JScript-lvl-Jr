let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}


const inscribir = (alumno,materia) =>{
    personas = materias[materia] //si accedemos a materias accedemos en general y cuando especifique a fisica, nos devuelve ese array
    if (personas.length >= 21) { //es 20 alumnos + 1(perex el profe)
        document.write(`lo siento <b>${alumno}</b>, las clases de ${materia}</b> ya estan llenas<br> <br></b>`)
    } else {
        personas.push(alumno); //con esto se agrega cada alumno que se vaya inscribiendo al array(el sistema q representa los elementos de inscripcion en las calses de la uni)
        if (materia == "fisica") {  //redifinimos la variable completa por temas de conocimientos. y como era una const no se puede refidinir entonces escribi un let al principio.
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
    else if (materia == "programacion") {   //aca hice lo mismo pero el alumno selecciona la materia programacion para inscribirse
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "logica") {   //aca hice lo mismo pero el alumno selecciona la materia logica para inscribirse
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if (materia == "quimica") {   //aca hice lo mismo pero el alumno selecciona la materia quimica para inscribirse
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`Felicidades ${alumno}! te has insccripto a ${materia} correctamente.<br> <br`);
    } 
}

inscribir("pedrito","fisica")
inscribir("jorge","fisica")
inscribir("ramses","fisica")
inscribir("pablo","fisica")
inscribir("dalto","fisica")
inscribir("pedrito","fisica")
inscribir("bob","fisica")
inscribir("paolo","fisica")
inscribir("ramses","fisica")
inscribir("cofla","fisica")
inscribir("maria","fisica")
inscribir("luciano","fisica")
inscribir("lolo","fisica")
inscribir("tom","fisica")
inscribir("juan","fisica")
inscribir("elon","fisica")
inscribir("jeff","fisica")
inscribir("teslta","fisica")
inscribir("ada adove","fisica")
inscribir("tuvi","fisica")
inscribir("roger","fisica")
inscribir("jay z","fisica")
inscribir("eminem","fisica")
inscribir("dano","fisica")


document.write("<br>" + materias['fisica'])