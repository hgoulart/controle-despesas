<?php

include 'connect.php';

	if ($result = $conexao->query("SELECT * FROM `classes` ORDER BY classes.classe_nome")) {

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

