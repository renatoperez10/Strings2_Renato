// Punto 1

function snakeCase_to_camelCase() {
  let frase = "hello_world";

  let posicion = frase.indexOf("_");

  let primeraPalabra = frase.slice(0, posicion);

  let segundaPalabra = frase.slice(posicion + 1);

  let segundaPalabraMayuscula = segundaPalabra.toUpperCase().charAt(0) + segundaPalabra.slice(1);

  let nuevaFrase = primeraPalabra + segundaPalabraMayuscula;

  console.log(nuevaFrase);
}

snakeCase_to_camelCase();

// Punto 2

function camelCase_to_snakeCase() {
  let frase = "helloWord";

  let posicion = frase.search(/[A-Z]/g);

  let primeraPalabra = frase.slice(0, posicion);

  let segundaPalabra = frase.slice(posicion);

  let segundaPalabraMayuscula = segundaPalabra.toLowerCase().charAt(0) + segundaPalabra.slice(1);

  let nuevaFrase = primeraPalabra + "_" + segundaPalabraMayuscula;

  console.log(nuevaFrase);
}

camelCase_to_snakeCase();
