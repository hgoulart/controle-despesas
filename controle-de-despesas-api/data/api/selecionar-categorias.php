<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$classe_id = $data;

$sql = "SELECT classe_id, classe_nome, classe_class FROM classes WHERE classe_id = '$classe_id'";

if ($resultado = $conexao->query($sql)) {

	$dados = array();

	while($row = $resultado->fetch_array(MYSQLI_ASSOC)){

		$parent = array(
			'classe_id'=>$row['classe_id'],
			'classe_nome'=>$row['classe_nome'],
			'classe_class'=>$row['classe_class']
		);
	};

	$query = "SELECT * FROM `categorias` WHERE categorias.classe_id = '$classe_id' ORDER BY categoria_nome";

	if ($result = $conexao->query($query)) {

		$dados = array();

		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			$dados[] = $row;
		};

		$parent['categorias'] = $dados;
		echo json_encode($parent);
	}else{
		$dados = 'Erro';
		die($dados);
	}

}else{
	$dados = 'Erro';
	die($dados);
}
?>