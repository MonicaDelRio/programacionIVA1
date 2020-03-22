var $ = El => document.querySelector(El);
document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = $("[class*='mostrar']");
    mostrarVista.addEventListener('click',e=>{
        e.stopPropagation();

        let modulo = e.toElement.dataset.modulo;
        fetch('public/vistas/docentes/docentes.html').then( res=>res.text() ).then(res=>{
            $(`#vista-${modulo}`).innerHTML = res;

            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `public/vistas/${modulo}/${modulo}.js`;
            cuerpo.appendChild(script);
        });
    });
});