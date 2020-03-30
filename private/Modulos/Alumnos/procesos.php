<?php 
include('../../Config/Config.php');
$alumno = new alumno($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$alumno->$proceso( $_GET['alumno'] );
print_r(json_encode($alumno->respuesta));

class alumno{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];

    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($alumno){
        $this->datos = json_decode($alumno, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'por favor ingrese el codigo del estudiante';
        }
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'por favor ingrese el nombre del estudiante';
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'por favor ingrese la direccion del estudiante';
        }
        $this->almacenar_alumno();
    }
    public function buscarAlumno($valor=''){
        $this->db->consultas('
            select alumnos.idAlumno, alumnos.codigo, alumnos.nombre, alumnos.direccion, alumnos.telefono
            from alumnos
            where alumnos.codigo like "%'.$valor.'%" or alumnos.nombre like "%'.$valor.'%"
        ');
        return $this->respuesta = $this->db->obtener_datos();
    }
    public function eliminarAlumno($idAlumno=''){
        $this->db->consultas('
            delete alumnos
            from alumnos
            where alumnos.idAlumno = "'.$idAlumno.'"
        ');
        $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }
}
?>