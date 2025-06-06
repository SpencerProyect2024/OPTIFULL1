<?php
// Datos para conexión
$host = "localhost";
$user = "root";
$pass = "";
$db = "dbformulario";  // Cambia por el nombre de tu base de datos

// Conectar a la base de datos
$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos POST y limpiar
$nombre = $conn->real_escape_string(trim($_POST['nombre']));
$email = $conn->real_escape_string(trim($_POST['email']));
$asunto = $conn->real_escape_string(trim($_POST['asunto']));
$mensaje = $conn->real_escape_string(trim($_POST['mensaje']));

// Validar campos básicos
if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
    die("Error: Todos los campos son obligatorios.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Error: Email inválido.");
}

// Preparar y ejecutar consulta insert
$sql = "INSERT INTO contactos (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombre, $email, $asunto, $mensaje);

if ($stmt->execute()) {
    echo "Mensaje enviado correctamente. <a href='contacto.html'>Volver al formulario</a>";
} else {
    echo "Error al guardar el mensaje: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
