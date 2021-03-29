function usuario(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

const nuevousuario = new usuario("paula", 32, "wernicke 2651");
console.log(JSON.stringify(nuevousuario));

localStorage.setItem('usuario', JSON.stringify(nuevousuario));



const productos = [{
    id: flores,
    nombre: 'Vestido Flores',
    precio: 500,
    imagen: 'image/IMG_3904.JPG',
    ubicacion: 'page/summer.html'
}, {
    id: primavera,
    nombre: 'Vestido Primavera',
    precio: 600,
    imagen: 'image/IMG_3908.JPG',
    ubicacion: 'page/summer.html'
}, {
    id: rayas,
    nombre: 'Vestido Rayas',
    precio: 700,
    imagen: 'image/IMG_3917.JPG',
    ubicacion: 'page/summer.html'
}, {
    id: yellow,
    nombre: 'Remera Yellow',
    precio: 700,
    imagen: 'image/IMG_3913.JPG',
    ubicacion: 'page/summer.html'
}, {
    id: white,
    nombre: 'Vestido White',
    precio: 700,
    imagen: 'image/IMG_3677.JPG',
    ubicacion: 'page/summer.html'
}, {
    id: durazno,
    nombre: 'Mono Durazno',
    precio: 800,
    imagen: 'image/IMG_3680.JPG',
    ubicacion: 'page/summer.html'
}]

const busqueda = document.querySelector('#busqueda');
const press = document.querySelector('#press');
const resultado = document.querySelector('#resultado')
const filtrar = () => {
    console.log(busqueda.value);
    resultado.innerHTML = '';

    const texto = busqueda.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `<li>${producto.nombre} - precio: ${producto.precio} </li> `

        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `<li>Producto no encontrado</li> `
    }
}
press.addEventListener('click', filtrar)
    //busqueda.addEventListener('keyup', filtrar)
    //filtrar(); //miformulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
    e.preventDefault();
    console.log("formulario enviado");
    console.log(JSON.stringify(miformulario));
}
//intente poner el id de miformulario en el div de la pagina contacto pero no funciono.
function handleClick(e) {
    const nombreformu = document.getElementsById("nombreForm").value;
    const apellidoformu = document.getElementsById("apellidoForm").value;
    const ciudadformu = document.getElementsById("ciudadForm").value;
    const localidadformu = document.getElementsById("localidadForm").value;
}
const boton = document.getElementsById("botonTerminar");
boton.addEventListener('Terminar', handleClick);