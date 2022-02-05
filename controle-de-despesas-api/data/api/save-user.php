<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$user_name = $data->user_name;
$user_email = $data->user_email;
$user_phone = $data->user_phone;
$user_cpf = $data->user_cpf;
$user_password = $data->user_password;
$user_address = $data->user_address;
$user_address_number = $data->user_address_number;
$user_address_complement = $data->user_address_complement;
$user_district = $data->user_district;
$admin = 0;

$query = "INSERT INTO `user` ( `user_id`, `user_name`, `user_email`, `user_phone`, `user_cpf`, 
    `user_password`, 
    `user_address`, 
    `user_address_number`,
     `user_address_complement`, 
     `user_district`,
     `user_admin`) VALUES (
         NULL, 
         '$user_name', 
         '$user_email', 
         '$user_phone', 
         '$user_cpf', 
         md5($user_password), 
         '$user_address', 
         '$user_address_number', 
         '$user_address_complement', 
         '$user_district',
         '$admin')";

    $result = $conexao->query($query);

	if ($result) {
        $res = 'Usuário inserido com sucesso!';

	}else{
        $res = 'Erro';
        die($res); 
    }
	echo json_encode($res);

?>

