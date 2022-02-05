<?php

$userName = "root";
$passWord = "";
$hostName = "localhost";
$dbName = "despesas_db";
$porta = '5000';
$conexao = null;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$conexao = new mysqli($hostName, $userName, $passWord, "$dbName");

mysqli_set_charset($conexao,"utf8");

?>