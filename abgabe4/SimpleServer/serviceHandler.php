<?php
include("businesslogic/simpleLogic.php");

$param = "";
$method = "";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    isset($_GET["method"]) ? $method = $_GET["method"] : false;
    isset($_GET["param"]) ? $param = $_GET["param"] : false;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $method = $input['method'] ?? null;
    $param = $input['param'] ?? null;
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $input = json_decode(file_get_contents('php://input'), true);
    $method = $input['method'] ?? null;
    $param = $input['param'] ?? null;
}

$logic = new SimpleLogic();
$result = $logic->handleRequest($method, $param);

if ($result == null) {
    response($_SERVER['REQUEST_METHOD'], 400, null);
} else {
    response($_SERVER['REQUEST_METHOD'], 200, $result);
}

function response($method, $httpStatus, $data)
{
    header('Content-Type: application/json');
    switch ($method) {
        case "GET":
        case "POST":
        case "PUT":
        case "DELETE":
            http_response_code($httpStatus);
            echo json_encode($data);
            break;
        default:
            http_response_code(405);
            echo json_encode(["error" => "Method not supported yet!"]);
    }
}
