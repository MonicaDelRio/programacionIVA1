<?php
date_default_timezone_set('America/El_Salvador');

if( $_GET && isset ($_GET['Nombre'])){
$nombre = $_GET['nombre'];
echo 'Hola'.$nombre. 'desde el servidor'.date('d-m-Y H:i:s');
}else{
    header('location:index.html');
}
?>