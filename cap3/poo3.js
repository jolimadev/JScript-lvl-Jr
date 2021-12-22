class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente")
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desinstalada correctamente")
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) { //otra doble validación
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) { //doble validación
			this.iniciada = false;
			alert("app cerrada");
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}

}
//acordate que el problema planteaba 7 apps, por eso copy paste x7
app = new App ("16.000", "5 stars", "900mb"); //descargas, puntuacion, peso
app2 = new App ("13.000", "4 stars", "400mb"); 
app3 = new App ("15.000", "5 stars", "100mb"); 
app4 = new App ("9.000", "4 stars", "600mb"); 
app5 = new App ("8.700", "5 stars", "520mb"); 
app6 = new App ("17.000", "2 stars", "800mb"); 
app7 = new App ("11.800", "1.9 stars", "1gb"); 
//metodos:

//app.instalar();
//app.abrir()
//app.cerrar()
//app.desinstalar();

//se que con bucles es más facil pero en los proximos cap lo vamos a ver
document.write(`  
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);