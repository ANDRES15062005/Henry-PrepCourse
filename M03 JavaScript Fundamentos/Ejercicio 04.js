/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return num ** 2
}
console.log (elevarAlCuadrado(10))

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código: 
   return num ** 3
}
console.log (elevarAlCubo(4))

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return num ** exponent
}
console.log(elevar(2,6))

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round (num)
}
console.log (redondearNumero(3.9))

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil (num)
}
console.log (redondearHaciaArriba(3.00001))

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random (0,1)
}
console.log (numeroRandom(0,1))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
