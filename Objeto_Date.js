let fecha = new Date();
let diaDeLaSemana = fecha.getDay();
let dia = fecha.getDate();
let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]


console.log ("Hoy es el día " + dia + " del mes " + (mes + 1)  +  " del año " + anio);
