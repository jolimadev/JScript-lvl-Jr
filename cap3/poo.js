// Problema A
class Celular {
    constructor(color, peso,rdp,rdc,ram){
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;    
}
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }else {
            alert("el celular está apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
}

celular1 = new Celular("rojo", "150g","5'","full hd", "2GB");

celular1,presionarBotonEncendido()
celular1.tomarFotos();
celular1.grabarVideo();
celular1.presionarBotonEncendido();