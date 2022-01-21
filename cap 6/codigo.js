
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "<img class='llave-img' src='./llave.png'>";      //para que se pueda visualizar se devuelve con la tag <img src>
    nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`; //el modelo es único entonces nos permite buscar en el bdd
    precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}
//quiero algo fijo en vez de :
//contenedor.innerHTML += llave[0] + llave [1] + llave [2]; //aca traemos el elemento de html con js 

//Entonces podemos hacer esto :
let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) { //vamos a ejecutar 20 veces, de acuerdo a los q nos pide x la cant de key's
    let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);//genere un n`random para el precio d las llaves
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item'); //"add de añadir una clase u otra aparte" el ${i} es para detectar q tipo de item es
    div.innerHTML = llave[0]+ llave[1]+ llave[2]+ llave [3]; //se puede reemplazar como ...llave q es un operator string
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);