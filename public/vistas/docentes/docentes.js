var $ = el =>document.querySelector(el),
frmAlumnos=$("#frmDocentes");
frmAlumnos.addEventListener("submit", e =>{
    e.preventDefault();
    e.stopPropagation();

    let docentes={
        accion: 'nuevo',
        codigo: $("#txtCodigoDocente").value,
        nombre: $("#txtNombreDocente").value,
        direccion: $("#txtDireccionDocente").value,
        Telefono: $("#txtTelefonoDocente").value,
    };
    fetch(`private/Modulos/Docentes/procesosDocentes.php?procesoDocentes=recibirDatosdoc&docente=${JSON.stringify(docentes)}`).then(resp=>resp.json()).then(resp=>{
        $("#respuestaDocentes").innerHTML=`
        <div class="alert alert-success" role="alert">
            ${resp.msg}
        </div>
        `;
    });
    
});