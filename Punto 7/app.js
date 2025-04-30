// Realizado por: David Rivadeneira

let primerNumero = prompt("Número 1:");
let segundoNumero = prompt("Número 2:");
let tercerNumero = prompt("Número 3:");

if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
  alert(primerNumero);
} else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
  alert(segundoNumero);
} else {
  alert(tercerNumero);
}