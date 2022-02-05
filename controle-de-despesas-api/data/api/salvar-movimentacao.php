<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$classe_id = $data->classe_id;
$categoria_id = $data->categoria_id;
$usuario_id =  $data->usuario_id;
$busca_data =  $data->busca_data;
$preco = $data->categoria_valor;
$comments = $data->comments;

    if($preco){
        $sql = "INSERT INTO `preco` (`preco_id`, `preco`, `preco_data`, `busca_data`) VALUES (NULL, '$preco', DATE(NOW()), '$busca_data' )";
    }

    $result = $conexao->query($sql);

	if ($result) {

        $last_id = $conexao->insert_id;

        $query = "INSERT INTO `movimentacao` (`movimentacao_id`, `m_classe_id`, `m_categoria_id`,`usuario_id`, `preco`, `observacoes`, `status`) VALUES (NULL, '$classe_id', '$categoria_id', '$usuario_id', '$last_id', '$comments', 0)";
        $resultado = $conexao->query($query);

        if($resultado){
            $res = 'Salvo com sucesso!';
        }else{
            $res = 'Erro 1';
            die($res); 
        }
	}else{
        $res = 'Erro 2';
        die($res); 
    }
	echo json_encode($res);

?>

