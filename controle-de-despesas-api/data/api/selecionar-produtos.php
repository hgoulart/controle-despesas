<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$categoria_id = $data;

$sql = "SELECT * FROM `produtos` WHERE categoria_id = '$categoria_id' ORDER BY produto_nome";

	if ($resultado = $conexao->query($sql)) {

		$dados = array();

		while($row = $resultado->fetch_array(MYSQLI_ASSOC)){

			$dados[] = $row;
		};

		echo json_encode($dados);

	}else{
		$dados = 'Erro';
		echo json_encode($dados);
	}

?>

