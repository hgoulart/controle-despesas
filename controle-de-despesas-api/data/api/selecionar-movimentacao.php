<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$usuario_id = $data->id;
$busca_data = $data->data;

	if ($result = $conexao->query("SELECT movimentacao.movimentacao_id, movimentacao.m_classe_id, movimentacao.m_categoria_id, movimentacao.observacoes, movimentacao.preco, preco.preco_id, preco.preco, preco.preco_data, categorias.categoria_nome, categorias.categoria_img FROM `movimentacao` INNER JOIN preco ON preco.preco_id = movimentacao.preco INNER JOIN categorias ON categorias.categoria_id = movimentacao.m_categoria_id WHERE movimentacao.usuario_id = '$usuario_id' AND preco.busca_data = '$busca_data' ORDER BY m_categoria_id")) {

		$dados = array();

		while($row = $result->fetch_array(MYSQLI_ASSOC)){
			$dados[] = $row;
		};
		echo json_encode($dados);
	}else{
		$dados = 'Erro';
		echo json_encode($dados);
    }

?>

