<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$email = $data->email;
$password = md5($data->pass);

$sql = "SELECT usuario_nome, usuario_email, usuario_id FROM `usuarios` WHERE usuario_email = '$email'  AND usuario_senha = '$password'";

if ($result = $conexao->query($sql)) {

    $dados = array();

    while($row = $result->fetch_array(MYSQLI_ASSOC)){

        $dados = $row;
    };
  
    echo json_encode($dados);

}else{
    $dados = 'Erro';
    echo json_encode($dados);
}
?>