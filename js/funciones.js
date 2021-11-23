export const $=qs=>document.querySelector(qs);
const listaMusica=$('#lisra-musica')
export function cargarMusica(e){
    //console.log(e.target.files)
    const files=Array.from (e.target.files);

    files.array.forEach(f => {
        const reader=new FileReader();
        reader.onload=(function(archivo){
            return function(evt){
                const li=document.createElement('li');
                li.classList.add('list-item');
                li.id='music';
                li.innerHTML='<input type="hidden" value="${evt.target.result}"> <input type="hidden" value="${archivo}">    <audio src="${evt.target.result"></audio> ${archivo.name}';
                listaMusica.appendChild(li);
                //console.log(evt.target.result)
            }
        })(f);
        reader.readAsDataURL(f);
    });
}
export function reproducirMusica(e){
    if(e.target.classList.contains('list-item'))
}