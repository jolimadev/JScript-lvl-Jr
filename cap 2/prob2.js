//inicio de solución
let free = false;

const validarCliente = (time)=> {
    let edad = prompt("¿Cuál es tu edad?"); //la condicion de la edad <18 para el punto a)
    if (edad > 18) {
        if (true >= 2 && time <7 && free == false) { //aca esta la condicion armada de la situación del horario de las 2am no pagaba
            alert("podes pasar gratis, porque sos la 1era persona después de las 2am");
            free = true; //la condicional para que de el okey de pasar gratis
    } else {
        alert(`son las ${time}:00hs podes pasar, pero tenes que pagar`) 
    }

    } else{
        alert("sos -18, no podes entrar go to mc donald's")
        
    }
}

validarCliente(23);  //aca ponemos para que valide varias veces dando a entender que son varios clientes que ingresaran a la fiesta.
validarCliente(24);
validarCliente(02);
validarCliente(06);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
