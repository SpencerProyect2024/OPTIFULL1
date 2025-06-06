<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Consulta de Citas</title>
  <style type="text/css">
    table {
      border: solid 2px #7e7c7c;
      border-collapse: collapse;
      width: 90%;
      margin: 20px auto;
    }

    th, h1 {
      background-color: #edf797;
    }

    td, th {
      border: solid 1px #7e7c7c;
      padding: 10px;
      text-align: center;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #e6f2ff;
      text-align: center;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      color: #007bff;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

<?php
// Conexión
$user = "root";
$pass = "";
$host = "localhost";

// Conectamos a la base de datos
$connection = mysqli_connect($host, $user, $pass);

// Recuperamos los datos del formulario
$nombre   = $_POST["nombre"];
$email    = $_POST["email"];
$fecha    = $_POST["fecha"];
$hora     = $_POST["hora"];
$tipo     = $_POST["tipo"];
$mensaje  = $_POST["mensaje"];

// Verificamos la conexión
if (!$connection) {
  echo "No se ha podido conectar con el servidor: " . mysqli_connect_error();
} else {
  echo "<h3>Conexión establecida con el servidor</h3>";
}

// Seleccionamos la base de datos
$datab = "dbformulario";
$db = mysqli_select_db($connection, $datab);

if (!$db) {
  echo "No se ha podido encontrar la base de datos";
} else {
  echo "<h3>Base de datos seleccionada</h3>";
}

// Insertamos los datos en la tabla
$instruccion_SQL = "INSERT INTO citas (nombre, email, fecha, hora, tipo, mensaje)
                    VALUES ('$nombre', '$email', '$fecha', '$hora', '$tipo', '$mensaje')";

$resultado = mysqli_query($connection, $instruccion_SQL);

// Mostramos todas las citas
$consulta = "SELECT * FROM citas";
$result = mysqli_query($connection, $consulta);

if (!$result) {
  echo "No se ha podido realizar la consulta";
} else {
  echo "<h2>Listado de Citas</h2>";
  echo "<table>";
  echo "<tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Tipo</th>
          <th>Mensaje</th>
        </tr>";

  while ($colum = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $colum['id'] . "</td>";
    echo "<td>" . $colum['nombre'] . "</td>";
    echo "<td>" . $colum['email'] . "</td>";
    echo "<td>" . $colum['fecha'] . "</td>";
    echo "<td>" . $colum['hora'] . "</td>";
    echo "<td>" . $colum['tipo'] . "</td>";
    echo "<td>" . $colum['mensaje'] . "</td>";
    echo "</tr>";
  }
  echo "</table>";
}

mysqli_close($connection);
?>

<a href="agendar_cita.html">← Volver al formulario</a>

</body>
</html>

