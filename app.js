document.addEventListener("DOMContentLoaded",function(){
    var opcion = document.getElementById("cbopcion");
    var boton = document.getElementById("btnconvertir");

    let de = document.querySelector("cboDE").value,
    a = document.querySelector("cboA").value,
    cantidad = document.querySelector("cboCantidad").value,
    opcion = document.getElementById('cbopcion');


    boton.addEventListener("click",function(){
    if(opcion.value === "divisas"){
    divisas();
    }else if(opcion.value ==="longitudes"){
    longitudes();
    }
    });
    let divisas = {
    "dolar":1,
    "colon(sv)":8.75,
    "yen":111.27,
    "rupia":69.75,
    "lempira":24.36,
    "bitcoin":0.00026,
    },
    longitudes = {
        "metro":1,
        "centimetro":100,
        "pulgada":39.3701,
        "pie":3.28084,
        "varas":1.1963081929167,
        "yardas":1.09361,
        "kilometro":0.001,
        "millas":0.000621371,
        };

      let  = document.querySelector("");
      if(opcion.value == "divisas"){
        $res.innerHTML = `Respuesta: ${ (dividas[a]/dividas[de]*cantidad).toFixed(2)}`;
      } else if(opcion.value == "longitudes"){
        $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2)}`;
          
      };
    });
function elegir_opcion() {
  let opcion = document.getElementById('cbopcion'),
  de1 = document.getElementById('cboDe'),
  a1 = document.getElementById('cboA');

  de1.value="";
  a1.value="";
  de1.innerHTML="";
  a1.innerHTML="";

  if(opcion.value == "divisas"){
    var  array = ["dolar!Dolar","colon(SV)!Colon(SV)","yen!Yen","rupia!Rupia","lempira!Lempira","bitcoin!Bitcoin"]; 
  } else if(opcion.value == "longitudes"){
    var array = ["metro!Metro","centimetro!Centimetro","pulgada!Pulgada","pie!Pie","varas!Varas","yardas!Yardas","kilometro!Kilometro","millas!Millas"];
 

  for(var i=0;i<array.length;i++){ 
    var repair = array[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    de1.options.add(newop);
  };
  for(var i=0;i<array.length;i++){ 
    var repair = array[i].split("!");
    var newop = document.createElement("option");
    newop.value = repair[0]
    newop.innerHTML = repair[1];
    a1.options.add(newop);
  };
 }


})