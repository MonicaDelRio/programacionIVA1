
var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded",event=>{
    let mostrarVista = $("[class*='mostrar']"),
    mostrardocentes=$("[class*='mostrardocentes']");

    mostrarVista.addEventListener('click',e=>{ 
        e.stopPropagation();
        let modulo = e.toElement.dataset.modulo;
        fetch('public/vistas/alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;

            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `public/vistas/alumnos/alumnos.js/${modulo}.js`;
            cuerpo.appendChild(script);
        });
    });
        mostrardocentes.addEventListener('click',e=>{
            e.stopPropagation();
            let modulo = e.toElement.dataset.modulo;
            console.log(modulo);
            fetch('public/vistas/docentes/docentes.html').then(resp=>resp.text() ).then(resp=>{
                $(`#vista-${modulo}`).innerHTML=resp;

                let btnCerrar=$(".close");
                btnCerrar.addEventListener("click",event=>{
                    $(`#vista-${modulo}`).innerHTML="";
                });

                let cuerpo =$("body"),
                script=document.createElement("script");
                script.src =`public/vistas/docentes/docentes.js/${modulo}.js`;
                cuerpo.appendChild(script);
            });
        });
});

