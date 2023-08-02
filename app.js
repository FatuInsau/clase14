// //                      buscar un elemnto por su ID
// let $titulo = document.getElementById('saludo');

// //            busca elemento por su clase
// document.getElementsByClassName('clase')

// // busca el primer elemento que coincida
// document.querySelector('.saludo')

// // busca todos los elementos que coincidan, devuelve []
// document.querySelectorAll('p')

let frutas = [
    {
        nombre: 'manzana',
        precio: 5,
        descripcion: 'Es roja y rica'
    },
    {
        nombre: 'banana',
        precio: 10,
        descripcion: 'Es amarilla y rica'
    },
    {
        nombre: 'pera',
        precio: 6,
        descripcion: 'Es verde'
    },
]

function click () {
    console.log('hola')
}
//                       div 
let $contenedor = document.getElementById('contenedor');
$contenedor.addEventListener('click',click)

for(let i=0; i< frutas.length; i++){
    $contenedor.innerHTML += `<div>
                            <h2>${frutas[i].nombre}</h2>
                            <p>${frutas[i].descripcion}</p>
                            <p>${frutas[i].precio}</p>
                            </div>`;
};


