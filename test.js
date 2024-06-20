function suma(num1, num2){
    var result = num1 + num2 
    return result;
} 

console.log (suma(4,7))
suma(2345,4536)

function bienvenida(){
    return "Steffany me cae mal"
}

console.log((bienvenida()))

function multiplicacion (num1, num2){
    var result = num1 * num2 
    return result
}
console.log (multiplicacion (234,9))
var nombre = "Mariana"
function puedemanejar (edad){
    if(edad >= 18){
        return nombre + "  si puede manejar porque es mayor de edad " + edad +
        ' años' 
    }else {
        return nombre + " no puede manejar porque esta muy joven";
    }
}
console.log (puedemanejar(48))

function semaforo(color){
    if (color === "rojo"){
        return " Los autos deben detenerse de inmediato, si no tome su parte"
    }else if (color === "amarillo"){
        return " Los autos deben ir frenando, para evitar accidentes"
    }else if (color === "verde"){
        return " Los autos pueden avanzar"
    }else if( color === "Mazda Cx-30"){
        return "Puede avanzar por ser una camioneta masima de masimas"
    }else {
        return "Esto no es un semaforo"
    }
}

console.log(semaforo(""))
console.log (Math.random (2,3))


for (let i = 0 ; i < 20 ; i = i + 2){
    console.log(i)
}
function EncontrarVocalA(string){ 
    console.log(string.length); 
    for (var i= 0 ; i < string.length ; i++){
        console.log(string[i])
        if (string [i] === 'a'){
        return "ENCONTRAMOS LA LETRA A"
        }
    }
}

console.log (EncontrarVocalA('Eduardo'))

function Menora5(){
    var contador = 0; 
    while(contador <= 5){
        console.log ("Contador es: " + contador);
        contador++
    }
     return contador 
}

console.log (Menora5())

function Menora10(){
    var contador = 1;
    do{
        contador++ 
    }
    while (contador < 10) 
    return contador
}
console.log (Menora10())

function Semaforo(color){
    switch (color){
        case "Verde":
            console.log("Pueden avanzar");
            break
        case "Amarillo":
            console.log("Deben Frenar");
            break
        case "Rojo":
            console.log("Deben detenerse");
            break
        default: 
        console.log("Esto no es un color");
    }
}

(Semaforo("Azul"))

var comidas = ["Hamburguesa", "Hot Dog", "Pizza", "Lasagna"]
comidas.pop()
comidas.unshift("Morcilla")
console.log(comidas);

var autos = ["Ford", "Chevrolet", "BMW", "Kia"]

autos.forEach(function(auto, indice){
    console.log(auto, indice);
})

var numeros = [4,6,8,10]

function multiplicarPorTres(elemento){
    return elemento * 3
}
var resultado = numeros.map(multiplicarPorTres)
console.log(resultado); 

var suma = numeros.reduce(function(acumulador, elemento){
    return acumulador + elemento
},0)

var palabras = [ "Hola", "Como", "Estas", "Mi", "Nombre", "Es", "Andres"]

var frase = palabras.reduce(function(Primera, Segunda ){
    return Primera + " " + Segunda
},"Mi frase es :")

console.log(frase);

function NOMBRE(nombre, apellido){
    console.log (arguments.length)
}

NOMBRE("Aura", "Sandoval")

var num = 5 

while (num - 0){
    console.log(num)
    num--
}

for (var i = 0; i < 5; i++) {
    console.log(i);
}
 var resultado; 
 switch (2){
    case 1:
        resultado= "uno"
        case 2: 
        resultado= "dos"
        break;
        default: 
        resultado= "otro"
 } 
 console.log(resultado);

function Hola(arreglo) {
    return arreglo.reduce (function (a,b) {return a + b} ,0) 
    
}
console.log(Hola);
true && false || false
typeof "5" + 5
console.log(typeof "5" + 5);
var resultado = 2 != "2" || 2 !== 2
console.log(resultado
    );
var i = 0 
while (i < 3) {
    console.log(i);
    i++
} function foo(objeto){
    return objeto.clave;
}
var my_var = foo({nombre: "Henry"}) 
console.log(my_var)
var ejercicio = true && false || false 
console.log(ejercicio);

function foo(arreglo){
    var my_var = 0
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i]% 2 === 0){
            my_var += arreglo[i]
        }
    }
    return my_var 
}

console.log(foo);(1,2,3,4,5,6)

var hola = typeof "5" + 5 
console.log(hola);

let Myvar = "3" > "10"
console.log(Myvar)

for (let index = 0; index < array.length; index++) {
    
}