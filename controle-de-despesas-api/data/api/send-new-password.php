<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$email = $data->email;

if ( $result = $food_conexao->query("SELECT * FROM `user` WHERE user.user_email = '$email'") ) {

    $dados = array();

    while($row = $result->fetch_array(MYSQLI_ASSOC)){
        $dados = $row;
    };

    if(count($dados)){

        $key = sha1($dados['user_id'].$dados['user_password']);
        $dados['user_key'] = substr($key, 0, 6);
        $newPassword = md5(substr($key, 0, 6));
        $user_id = $dados['user_id'];
        $user_pass = $dados['user_key'];
        $user_name = $dados['user_name'];

        $sql = "UPDATE `user` SET `user_password` = '$newPassword' WHERE `user`.`user_id` = '$user_id'";

        if ($resultado = $conexao->query($sql)) {
            
            $nome_remetente = "Controle de Despesa";
            $email_usuario = $dados['user_email'];
            $email_assunto = "Redefinição de Senha";
            $email_message = "Olá {$user_name}, segue a nova senha conforme solicitação no app. Nova senha: {$user_pass}"; 
            $email_remetente = "contato@hingorocha.com.br";
            $headers = "MIME-Version: 1.1\n";
            $headers .= "Content-type: text/html; charset=iso-8859-1\n";
            $headers .= "De: contato@hingorocha.com.br \n"; // remetente
            $headers .= "Bcc: hingogoulart@gmail.com \n";
            // $headers .= "Return-Path: contato@hingorocha.com.br \n"; // return-path
            //$headers .= "Reply-To: contato@hingorocha.com.br \n"; // Endereço (devidamente validado) que o seu usuário informou no contato

            if(mail($email_usuario, $email_assunto, $email_message, $headers, "-f$email_remetente" )){

                echo json_encode($dados);
            }else{
                echo json_encode("Erro ao enviar o email.");
            }

        }else{
            $dados = 'Erro';
            die($dados);
        }
        
    }else{
        $res = 'Erro';
        echo json_encode($res);
    }
  
    
}else{
    $res = 'Erro';
    echo json_encode($res);
}
?>