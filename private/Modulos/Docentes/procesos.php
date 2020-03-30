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
    private function validar_datos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el codigo del docente';
        }
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre del docente';
        }
        if( empty($this->datos['nit']) ){
            $this->respuesta['msg'] = 'por favor ingrese el NIT del docente';
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'por favor ingrese la direccion del docente';
        }
        if( empty($this->datos['telefono']) ){
            $this->respuesta['msg'] = 'por favor ingrese el telefono del docente';
        }
        $this->almacenar_docente();
    }
    public function buscarDocente($valor=''){
        $this->db->consultas('
            select docentes.idDocente, docentes.codigo, docentes.nombre, docentes.nit, docentes.direccion, docentes.telefono
            from docentes
            where docentes.codigo like "%'.$valor.'%" or docentes.nombre like "%'.$valor.'%"  or docentes.nit like "%'.$valor.'%"
        ');
        return $this->respuesta = $this->db->obtener_datos();
    }
    public function eliminarDocente($idDocente=''){
        $this->db->consultas('
            delete docentes
            from docentes
            where docentes.idDocente = "'.$idDocente.'"
        ');
        $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }
}
?>