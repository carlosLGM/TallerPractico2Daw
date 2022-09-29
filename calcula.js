 function operacion() {
  caja = document.forms["sumar"].elements;
  var numero1 = Number(caja["cantidad"].value);
  var numero2 = Number(caja["costo"].value);
  var numero3 = Number(caja["adicion"].value);
  resultado = (numero1 * numero2);
  var Valor1 = document.getElementById('Check1').checked?100:0;
  var Valor2 = document.getElementById('Check2').checked?50:0;
	document.getElementById('valorAgregado').value = Valor1+Valor2;
 
  caja["saldo_pagar"].value = (resultado) ;
  if (!isNaN(resultado)) {
    caja["total"].value = (numero1 * numero2)+Valor1+Valor2 ;
  }
}   


