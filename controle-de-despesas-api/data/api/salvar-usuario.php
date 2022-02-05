<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$email = $data->email;
$nome = $data->nome;
$password = $data->password;

$query = "INSERT INTO `usuarios` ( `usuario_id`, `usuario_nome`, `usuario_email`, `usuario_senha`) VALUES (NULL, '$nome', '$email', md5($password))";

    $result = $conexao->query($query);

	if ($result) {
        $res = $result;

	}else{
        $res = 'Erro';
        die($res); 
    }
	echo json_encode($res);

?>

