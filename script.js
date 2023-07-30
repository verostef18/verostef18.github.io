const noticias = [
    {
        titulo: "Noticia 1",
        contenido: "Estamos de actualización,generando noticias con JS",

    },
    {
        titulo: "Noticia 2",
        contenido: "Estamos de actualización,generando noticias con JS",

    },
    {
        titulo: "Noticia 3",
        contenido: "Estamos de actualización,generando noticias con JS",

    }
];


       window.addEventListener("load",()=>{
        const dataList =document.getElementById("listaTareas");
    const noticia = document.getElementById("noticias");
    for(listaNot of noticias){
        let button=document.createElement("button");
        button.innerText=listaNot.titulo;
        button.className="button-noticia"
        noticia.appendChild(button);
        let p=document.createElement("p");
        p.innerText=listaNot.contenido;
        p.className="parrafo";
        
        
        noticia.appendChild(p);
    }

})
//Con ayuda de Chat gpt3
const comentariosContainer = document.getElementById("comentarios-container");
const comentarioForm = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const comentarioInput = document.getElementById("comentario");


const comentarios = [];

function mostrarComentario(nombre, comentario) {
    const comentarioHTML = `
  <img src="./img/avatar.png" width="150" alt="">
    <div class="comentarios nuevo-comentario ">
    
      <p class="nombre">${nombre}</p>
      <p>"${comentario}"</p>
    </div>
  `;
    comentariosContainer.insertAdjacentHTML('beforeend', comentarioHTML);
}

function agregarComentario(event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const comentario = comentarioInput.value;

    // Agregar el comentario al array
    comentarios.push({ nombre, comentario });

    // Mostrar el comentario en la página
    mostrarComentario(nombre, comentario);


}

comentarioForm.addEventListener('submit', agregarComentario);
