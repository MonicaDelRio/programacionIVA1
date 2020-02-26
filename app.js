document.addEventListener("DOMContentLoaded", e=>{
  const form = document.querySelector("#frm");
  form.addEventListener("submit", event=>{
      event.preventDefault();
      
     let nombre = document.querySelector("txtNombre").value; 
     fetch ('saludo.php?nombre=$'(Nombre))
     .then(resp=>resp.text())
     .then(respuesta=>{
       document.querySelector("#lblRespuesta").innerHTML = respuesta;
     });
  });
});