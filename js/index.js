import {$,cargarMusica,re} from './funciones.js';
const btnCargar=$('#files');
const listaMusica=$('#lista-musica');
document.addEventListener('DOMContentLoaded',()=>{
    btnCargar.addEventListener('change', cargarMusica)
    listaMusica.addEventListener('click', reproducirMusica);
})