<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$preco_id = $data->preco_id;
$movimentacao_id = $data->movimentacao_id;

$query = "DELETE FROM `preco` WHERE `preco`.`preco_id` = '$preco_id'";
$del_preco = $conexao->query($query);

    if($del_preco){

        $sql = "DELETE FROM `movimentacao` WHERE `movimentacao`.`movimentacao_id` = '$movimentacao_id'";
        $del_movimentacao_id = $conexao->query($sql);

        if($del_movimentacao_id){
            $res = 'Sucesso ao excluir a Categoria!';
            echo json_encode($res);
        }
        
    }else{
        $res = 'Erro';
        die($res);
        echo json_encode($res);
    }

?>