// fetch --> es una herramienta que nos permite hacer peticiones https

let respuesta = fetch('https://rickandmortyapi.com/api/character');

respuesta
.then((data)=> {
    return data.json()
})
.then((data)=>{
    let personajes = data.results;
    let $contenedor = document.getElementById('contenedor');
})



// <div>
//             <h2>Nombre</h2>
//             <p>Edad</p>
//             <p>Genero</p>
//             <p>Especie</p>
//         </div>