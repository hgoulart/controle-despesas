<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$usuario_id = 1;//$data->id;
$busca_data = '2019-10';//$data->data;

$sql = "SELECT 
items.*, 
movimentacao.*,
produtos.*
 FROM `items` INNER JOIN `produtos` ON items.produto_id = produtos.produto_id INNER JOIN `movimentacao` ON movimentacao.preco = items.preco_id WHERE `data` = '$busca_data' AND movimentacao.usuario_id = '$usuario_id'";

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

