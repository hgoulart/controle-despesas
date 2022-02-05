<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$categoria_id = $data->categoria_id;
$produto_nome = $data->nome;

$sql = "INSERT INTO `produtos` (`produto_id`, `produto_nome`, `categoria_id`) VALUES (NULL, '$produto_nome', '$categoria_id')";

$result = $conexao->query($sql);

if ($result) {
	$res = $result;

}else{
	$res = 'Erro';
	die($res); 
}
echo json_encode($res);
?>

