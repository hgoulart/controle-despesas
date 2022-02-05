<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$categoria_id = $data->categoria;
$date = $data->data;
$produto_id = $data->produto;
$quantidade = $data->quantidade;
$total = $data->total;
$unitario = $data->valor;
$preco_id = $data->preco_id;

$sql = "INSERT INTO `items` (`item_id`, `categoria_id`, `data`, `produto_id`, `quantidade`, `total`, `unitario`,`preco_id`) VALUES (NULL, '$categoria_id', '$date', '$produto_id', '$quantidade', '$total', '$unitario','$preco_id' )";

$result = $conexao->query($sql);

if ($result) {
	$res = $result;

}else{
	$res = 'Erro';
	die($res); 
}
echo json_encode($res);

?>

