// if

let numeriIf = 3;

if(num == 0) {
  console.log('Numero es igual a 0');
} else if(num < 0) {
  console.log('Numero es menor que 0');
} else {
  console.log('Numero es mayor que 0');
}

// while

let numeroWhile = 0;

while(numeroWhile <= 10) {
  console.log(numeroWhile);
  numeroWhile++;
}

// do while

let numeroDoWhile = 0;

do{
  console.log(numeroDoWhile);
  numeroDoWhile++;
} while(numeroDoWhile <= 10);

for(let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// switch

const ESTACION = 'Verano';

switch(ESTACION) {
  case 'Verano':
    console.log('Es Verano');
    break;
  case 'Otoño':
    console.log('Es Otoño');
    break;
  case 'Invierno':
    console.log('Es Invierno');
    break;
  case 'Primavera':
    console.log('Es Primavera');
    break;
  default:
    console.log(ESTACION);
}