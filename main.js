class Pokemon {
    constructor(nombre, tipo) {
        this.id = pokemons.length + 1
        this.nombre = nombre;
        this.tipo = tipo;

    }
}

const pokemons = [

    { id: 1, nombre: "squartle", tipo: "agua" },
    { id: 2, nombre: "borbasaur", tipo: "planta" },
    { id: 3, nombre: "pikachu", tipo: "electrico" },
    { id: 4, nombre: "chicorita", tipo: "planta" },
    { id: 6, nombre: "raichu", tipo: "electrico" },
    { id: 7, nombre: "onix", tipo: "roca" },
    { id: 8, nombre: "tentacool", tipo: "agua" },
    { id: 9, nombre: "charizard", tipo: "fuego" },
    { id: 10, nombre: "gaslee", tipo: "oscuro" },
    { id: 11, nombre: "hitmotchan", tipo: "lucha" },
]

const filtrar = ()=> {
    let consultaFiltrado = prompt("que tipo de pokemon quieres filtrar ejemplo: lucha-agua-roca-fuego-electrico?").toLowerCase()
            const filtrados = pokemons.filter(pokemon => pokemon.tipo === consultaFiltrado)
            console.log(filtrados)
}

const buscar = ()=> {
    let consultaBusqueda = prompt("que pokemon quieres buscar?").toLowerCase()
    const busqueda = pokemons.find(pokemon => pokemon.nombre === consultaBusqueda)
    console.log(busqueda)
}

const agregar = ()=> {
    while (consulta3.toLowerCase() === "si") {
        let consulta1 = prompt("Agrega un pokemon a la lista, ingrese su nombre.")
        let consulta2 = prompt("Escribe el tipo de pokemon que agregaste anteriormente.")
        pokemons.push(new Pokemon(consulta1, consulta2))
        consulta3 = prompt("desea agregar otro pokemon? ingrese si ,sino, salir")
        console.log(pokemons)
    }
}
let consultaPrincipal = prompt("Que quieres hacer? Si quieres agregar un pokemon pon 'agregar', si quieres filtrar pon 'filtrar', si quieres encontrar un pokemon escribe 'buscar', si quieres salir ingrese 'salir'").toLowerCase()
let consulta3 = "si"
while (consultaPrincipal !== "salir") {
    switch (consultaPrincipal.toLowerCase()) {
        case "agregar":
           agregar()
            break
        case "filtrar":
            filtrar()
            break
        case "buscar":
            buscar()
            break
    }
    consultaPrincipal = prompt("Que quieres hacer? Si quieres agregar un pokemon pon 'agregar', si quieres filtrar pon 'filtrar', si quieres encontrar un pokemon escribe 'buscar'").toLowerCase()
}
let div = document.getElementById("contenedor")


pokemons.forEach(pokemon => { 
    let arrayPokemon = document.createElement("div")
    arrayPokemon.innerHTML= `<h1>Nombre de pokemon = ${pokemon.nombre}<h1/>` 

div.append(arrayPokemon)
});





