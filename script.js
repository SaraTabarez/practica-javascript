console.log("Hola mundo");

const nombre = "Sara";
let apellido = "Tabarez";

console.log (nombre)
console.log (apellido)

//nombre = "Thania";
apellido = "Garcia";

console.log(apellido);

console.log("-----Objetos de JavaScript-----")

const persona = {
    nombre : "Sarhaby",
    apellido : "Tabarez",
    edad : 18,
    apodos : ["Caña", "Bibi", "Pollito"]
};
persona.apellido = "Garcia Tabarez";
console.log(persona.apellido);
console.log("-----Fin Objetos-----")

console.log("-----Funciones en JavaScript-----")

//function saludar (nombre){
 //  return "Hola " + nombre;
//}

//const saludar = (nombre) => {
  //  return "Hola " + nombre;
//}

const saludar = nombre => 
    "Hola " + nombre;

const saludo = saludar (persona.apellido);
    console.log (saludo);

    console.log("-----Fin Funciones-----")

console.log("-----Listas-----")

const listaNumeros = [
    5,10,3,8,9
];

console.log(listaNumeros);
listaNumeros[3] = 7;
console.log(listaNumeros);

const numerosMult = listaNumeros.map(
    (numEnElQueVoy) => {
        return numEnElQueVoy * 3;
    }
);

console.log(numerosMult);

const numEnObjetos= listaNumeros.map(
    (numEnElQueVoy) => {
        return{
            valor:numEnElQueVoy
        };
    }
);

console.log(numEnObjetos);

console.log("-----Fin Listas-----")

console.log("-----Function filter-----")

//const numerosX = [90,70,30,10,50];
//const numerosFiltrados = numerosX.filter(
  //  numX => numX>50;
//);
//console.log(numerosFiltrados);


const personas = [
 {
    nombre: "Sara",
    edad: 18
}, 
{
    nombre: "Sara",
    edad: 10
}, 
{
    nombre: "Sara",
    edad: 21
}, 
];

const personaMayores = personas.filter(
    (personaX) => {
        return personaX.edad > 17;
    }
);

console.log(personaMayores);

//Funcion reduce

const numerosY = [3,6,9,12,16];

const sumaNumero = numerosY.reduce(
    (variablePersistente, elemento) => 
        variablePersistente + elemento
    ,
    0
);

console.log(sumaNumero);