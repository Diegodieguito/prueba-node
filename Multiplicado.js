function tablaDeMultiplicar(unNumero){
    let tabla = 1;
  while(tabla<=10){
      console.log(unNumero + " " + "*" + " " + tabla + " = " + (unNumero * tabla)); tabla++;
  }
}
console.log (tablaDeMultiplicar(5))