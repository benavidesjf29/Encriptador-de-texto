const textoEncriptador = document.getElementById('texto-encriptador');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const textoDesencriptador = document.getElementById('texto-desencriptador');
const botonCopiar = document.getElementById('boton-copiar');
const aplicarLetras ='^[a-z !ñ]+$';

function minus(e) {
    e.value = e.value.toLowerCase();
}
//Ejecución de eventos a traves del DOM.
document.addEventListener('DOMContentLoaded', () => {
    botonEncriptar.addEventListener('click', encriptarTexto);
    botonDesencriptar.addEventListener('click', desencriptarTexto);
    botonCopiar.addEventListener('click', copiarTexto);
});

//Función encargada de encriptar el texto.
function encriptarTexto(e) {
    e.preventDefault();
    textoDesencriptador.value = '';
    let texto = textoEncriptador.value;
    if(texto.match(aplicarLetras)!=null){
        let palabras = texto.split(' ');
        let nuevasPalabras = [];
        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');      
            nuevasPalabras.push(palabra);    
        }
        document.getElementById("elemento-flotante").style.visibility = "hidden";
        document.getElementById("texto-desencriptador").style.visibility = "visible";
        document.getElementById("boton-copiar").style.visibility = "visible";
        const resultado = nuevasPalabras.join(' ');
        textoDesencriptador.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }  
}

//Función encargada de desencriptar el texto.
function desencriptarTexto(e) {
    e.preventDefault();  
    textoDesencriptador.value = '';
    let texto = textoEncriptador.value;
    if(texto.match(aplicarLetras)!=null){
        let palabras = texto.split(" ");
        let nuevasPalabras = [];    
        for (let palabra of palabras) {
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');
            nuevasPalabras.push(palabra);    
        }
        const resultado = nuevasPalabras.join(' ');
        textoDesencriptador.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }  
}

//Función validador de requerimientos (minúsculas y sin acentos).
function mostrarError(mensaje) {
    const existeError = document.querySelector('.error'); 
    if(!existeError) {
        const formulario = document.getElementById('formulario');
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;            
        formulario.appendChild(divMensaje);
        setTimeout(()=> {
            divMensaje.remove();
        }, 3000);
    }
}
  
//Función para copiar el texto.
function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = textoDesencriptador.value;
    navigator.clipboard.writeText(mensaje);
}
