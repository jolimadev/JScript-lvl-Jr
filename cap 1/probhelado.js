/*Problema de heladeria:
3 chicos de 20 años perfectamente normales entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado.
-	Ellos quieren comprar el helado más caro con la plata disponible que tienen, asi que vamos a ve…

Roberto tiene: $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son los siguientes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $ 1 USD
Bombón helado marca heladix: $1.6 USD
Bombón helado marca heladovich: $1.7 USD
Bombón helado marca helardo: $1.8 USD
Potecito de helado con rocklets: $2.9 USD
Pote de ¼ kg: $2.9 USD

-	Crear soluciones de:
a)	Pedirles que ingresen el monto que tienen y mostrarles el helado más caro.
b)	Si hay 2 o más con el mismo precio, mostrar ambos.
c)	Cofla quiere saber cuánto es el vuelto. 

*/

dineroCofla = prompt("How much money you got, Cofla?");
dineroRoberto = prompt("How much money you got, Robert?");
dineroPedro = prompt("How much money you got, Pedro Parker?");



if (dineroCofla >= 0.6 && dineroCofla < 1) { //SI el dinero de cofla es mayor a 0.6 y menor a 1 que se compre el helado de agua.
    alert("Cofla; comprate el helado de agua");
    alert("y te sobran " +(dineroCofla - 0.6)); //esto es la c
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) { //SI el dinero de cofla es mayor a 1 y menor a 1.6 que se compre el helado de crema.
    alert("Cofla; comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));//ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) { //SI el dinero de cofla es mayor a 1.6 y menor a 1.7 que se compre el helado de heladix.
    alert("Cofla; comprate el helado de heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) { //SI el dinero de cofla es mayor a 1.7 y menor a 1.8 que se compre el helado helardovich.
    alert("Cofla; comprate el helado de heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) { //SI el dinero de cofla es mayor a 1.8 y menor a 2.9 que se compre el helado de 1/4kg.
    alert("Cofla; comprate el helado marca helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla; comprate el helado con confites o el 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));
} else {
    alert("i'm sorry Coflin; you are broke..go to hustle if you want ice");
}
//////////////////////////////////////////////////////////////////////

if (dineroRoberto >= 0.6 && dineroRoberto < 1) { //SI el dinero de cofla es mayor a 0.6 y menor a 1 que se compre el helado de agua.
    alert("Roberto; comprate el helado de agua");
    alert("y te sobran " + (dineroRoberto - 0.6)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) { //SI el dinero de cofla es mayor a 1 y menor a 1.6 que se compre el helado de crema.
    alert("Betito; comprate el helado de crema");
    alert("y te sobran " + (dineroRoberto - 1)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) { //SI el dinero de cofla es mayor a 1.6 y menor a 1.7 que se compre el helado de heladix.
    alert("Roberto; comprate el helado de heladix");
    alert("y te sobran " + (dineroRoberto - 1.6)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) { //SI el dinero de cofla es mayor a 1.7 y menor a 1.8 que se compre el helado helardovich.
    alert("Roberto; comprate el helado de heladovich");
    alert("y te sobran " + (dineroRoberto - 1.7)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) { //SI el dinero de cofla es mayor a 1.8 y menor a 2.9 que se compre el helado de 1/4kg.
    alert(" Roberto; comprate el helado marca helardo");
    alert("y te sobran " + (dineroRoberto - 1.8)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto; comprate el helado con confites o el 1/4kg");
    alert("y te sobran " + (dineroRoberto - 2.9)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"

} else {
    alert("i'm sorry Robert you are broke..go to hustle if you want ice");
}
///////////////////////////////////////////////////////////////////////////////////////////

if (dineroPedro >= 0.6 && dineroPedro < 1) { //SI el dinero de cofla es mayor a 0.6 y menor a 1 que se compre el helado de agua.
    alert("Pedro; comprate el helado de agua");
    alert("y te sobran " + (dineroPedro - 0.6)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"

}
else if (dineroPedro >= 1 && dineroPedro < 1.6) { //SI el dinero de cofla es mayor a 1 y menor a 1.6 que se compre el helado de crema.
    alert("Pedro; comprate el helado de crema");
    alert("y te sobran " + (dineroPedro - 1)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) { //SI el dinero de cofla es mayor a 1.6 y menor a 1.7 que se compre el helado de heladix.
    alert("Pedro; parker comprate el helado de heladix");
    alert("y te sobran " + (dineroPedro - 1.6)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) { //SI el dinero de cofla es mayor a 1.7 y menor a 1.8 que se compre el helado helardovich.
    alert(" Pedro; comprate el helado de heladovich");
    alert("y te sobran " + (dineroPedro - 1.7)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) { //SI el dinero de cofla es mayor a 1.8 y menor a 2.9 que se compre el helado de 1/4kg.
    alert("Pedro; comprate el helado marca helardo");
    alert("y te sobran " + (dineroPedro - 1.8)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"

}
else if (dineroPedro >= 2.9) {
    alert("Pedro; comprate el helado con confites o el 1/4kg");
    alert("y te sobran " + (dineroPedro - 2.9)); //ven como aca puse en parentesis para que no me queda Nan y el dinero se reste con lo que gaste, asi me da el resultado del "vuelto"
} else {
    alert("i'm sorry pedro parker; you are broke..go to hustle if you want ice");
}

///////////////////////////////////////////////////////////////////////////////////