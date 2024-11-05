<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Database credentials
$host = "localhost"; // your host
$db_name = "my_database"; // your database name
$username = "your_username"; // your database username
$password = "your_password"; // your database password

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "SELECT * FROM states";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    $states = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($states);
} catch (PDOException $exception) {
    echo json_encode(["error" => $exception->getMessage()]);
}
?>
