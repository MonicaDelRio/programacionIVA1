<?php
include('../../config.php');
$docente=new docente($conexion);

$Proceso='';
if(isset($_GET['Proceso'])&& strlen($_GET['Proceso'])>0){
    $Proceso=$_GET['Proceso'];
}
$docente->$Proceso($_GET['docente']);
print_r(json_encode($docente->respuesta));
 
class docente{
    private $datos=array(),$db;
    public $respuesta=['msg'=>'correcto'];

    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatosdoc($docente){
        $this->datos=json_decode($docente, true);
        $this->validar_datosdoc();
    }
    private function validar_datosdoc(){
        if(empty($this->datos['codigo'])){
            $this->respuesta['msg']='por favor ingrese el codigo del docente';
        }
        if(empty($this->datos['nombre'])){
            $this->respuesta['msg']='por favor ingrese el nombre del docente';
        }
        if(empty($this->datos['direccion'])){
            $this->respuesta['msg']='por favor ingrese la direccion del docente';
        }
        if(empty($this->datos['telefono'])){
            $this->respuesta['msg']='por favor ingrese el telefono del docente';
        }
        $this->almacenar_docente();
    }
    private function almacenar_docente(){
        if($this->respuesta['msg']==='correcto'){
            if($this->ratos['accion']==='nuevo'){
                $this->db->consultas('
                INSERT INTO docentes(codigo,nombre,direccion,telefono)VALUES(
                    "'. $this->datos['codigo'].'",
                    "'. $this->datos['nombre'].'",
                    "'. $this->datos['direccion'].'",
                    "'. $this->datos['telefono'].'"  
                )
                ');
                $this->respuesta['msg']='Registro insertado correctamente';
            }
        }
    }
}
?>