/**
 * Calcula el precio de la entrada del Cine.
 * 
 * @param dia:
 *            Dia de la semana escrito en minusculas, ej:
 *            ['lunes','martes',...'domingo']
 * @param edad:
 *            edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */
function calcularEntrada() {
	var opcion = document.getElementById("listaDias").value;
	var edad =document.getElementById("edad").value;
	var precio = document.getElementById("precio");
	precio.innerHTML = "";
	if ((edad >= 0) && (!isNaN(edad)) && (edad != "")) {
		switch (opcion) {
		case '1':
			if (edad <= 35) {
				precio.innerHTML = 2 + "€";
			} else if(edad<100){
				precio.innerHTML = 5 + "€";
			} else {
				precio.innerHTML = "€";
			}
			break;
		case '2':
			if (edad <= 25) {
				precio.innerHTML = 2 + "€";
			} else if (edad > 25 && edad <= 50) {
				precio.innerHTML = 5 + "€";
			} else if(edad<100){
				precio.innerHTML = 7 + "€";
			} else {
				precio.innerHTML = "€";
			}
			break;
		case '3':
			if (edad <= 18) {
				precio.innerHTML = 3 + "€";
			} else if (edad > 18 && edad <= 50) {
				precio.innerHTML = 5 + "€";
			} else if(edad<100){
				precio.innerHTML = 8 + "€";
			} else {
				precio.innerHTML = "€";
			}
			break;
		case '4':
			if (edad <= 18) {
				precio.innerHTML = 5 + "€";
			} else if(edad<100){
				precio.innerHTML = 7 + "€";
			} else {
				precio.innerHTML = "€";
			}
			break;
		case '5':
		case '6':
		case '7':
			if(edad<100) {
				precio.innerHTML = 10 + "€";
			} else {
				precio.innerHTML = "€";
			}
			break;
		default:
			precio.innerHTML = "€";
		}// end switch
	} else {
		precio.innerHTML = '€';
	}
	return precio;
}
// end:function calcularEntrada();
