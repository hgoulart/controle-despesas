<?php

include 'connect.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$usuario_id = $data->id;
$busca_data = $data->data;

$dados = array();
$parents = array();

$sql = "SELECT movimentacao.movimentacao_id, movimentacao.m_classe_id, movimentacao.m_categoria_id, movimentacao.observacoes, preco.preco_id, preco.preco, preco.preco_data, categorias.categoria_nome, categorias.categoria_img FROM `movimentacao` INNER JOIN preco ON preco.preco_id = movimentacao.preco INNER JOIN categorias ON categorias.categoria_id = movimentacao.m_categoria_id WHERE movimentacao.usuario_id = '$usuario_id' AND preco.busca_data = '$busca_data' ORDER BY m_categoria_id";

	if ($result = $conexao->query($sql)) {

        $parents = array();
		$tmpCount = 0;

        while($row = $result->fetch_array(MYSQLI_ASSOC)){

            $parent = array(
                'movimentacao_id'=>$row['movimentacao_id'],
                'm_classe_id'=>$row['m_classe_id'],
                'm_categoria_id'=>$row['m_categoria_id'],
                'observacoes'=>$row['observacoes'],
                'preco'=>$row['preco'],
                'preco_id'=>$row['preco_id'],
                'preco_data'=>$row['preco_data'],
                'categoria_nome'=>$row['categoria_nome'],
                'categoria_img'=>$row['categoria_img']
            );

			$parents[] = $parent;
           
            $id = $row['preco_id'];
            
            $query = "SELECT 
                items.item_id,
                items.categoria_id,
                items.data,
                items.produto_id,
                items.quantidade,
                items.total,
                items.unitario,
                items.preco_id,
                produtos.produto_nome,
                produtos.produto_id
                FROM `items` 
                INNER JOIN `preco` 
                ON preco.preco_id = items.preco_id  
                INNER JOIN `produtos`
                ON produtos.produto_id = items.produto_id
                WHERE items.preco_id = '$id'";

            if ($resultado = $conexao->query($query)){
				$dados = array();

				while($line = $resultado->fetch_array(MYSQLI_ASSOC)){
					if($id === $line['preco_id']){
                        $children = array(
                            'item_id'=>$line['item_id'],
                            'categoria_id'=>$line['categoria_id'],
                            'data'=>$line['data'],
                            'produto_id'=>$line['produto_id'],
                            'quantidade'=>$line['quantidade'],
                            'total'=>$line['total'],
                            'unitario'=>$line['unitario'],
                            'preco_id'=>$line['preco_id'],
                            'produto_nome'=>$line['produto_nome']
                        );
                        $dados[] = $children;
					}
					
				};
                $parents[$tmpCount]['items'] = $dados;
			}else{
                $obj = 'Erro 1';
                die($obj);
            }
			$tmpCount ++;
        };
        
        $obj = $parents;
        echo json_encode($parents);
	}else{
        $obj = 'Erro 2';
        die($obj);
        echo json_encode($obj);
    }
	
?>

