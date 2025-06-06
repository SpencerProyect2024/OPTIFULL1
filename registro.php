
<?php
//validamos datos del servidor
$user = "root";
$pass = "";
$host = "localhost";

//conetamos al base datos
$connection = mysqli_connect($host, $user, $pass);

//hacemos llamado al input del formulario
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];  // aquí cambió a "correo" que es el nombre del campo en el formulario

//verificamos la conexion a base datos
if(!$connection) 
{
    echo "No se ha podido conectar con el servidor" . mysql_error();
}
else
{
    echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
}
//indicamos el nombre de la base datos
$datab = "dbformulario";
//indicamos seleccionar a la base datos
$db = mysqli_select_db($connection,$datab);

if (!$db)
{
    echo "No se ha podido encontrar la Tabla";
}
else
{
    echo "<h3>Tabla seleccionada:</h3>" ;
}
//insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
$instruccion_SQL = "INSERT INTO boletin_suscripciones (nombre, email)
                    VALUES ('$nombre','$correo')";

$resultado = mysqli_query($connection,$instruccion_SQL);

//consulta para mostrar todos los registros
$consulta = "SELECT * FROM boletin_suscripciones";

$result = mysqli_query($connection,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}

echo "<table>";
echo "<tr>";
echo "<th><h1>id</h1></th>";
echo "<th><h1>Nombre</h1></th>";
echo "<th><h1>Email</h1></th>";
echo "</tr>";

while ($colum = mysqli_fetch_array($result))
{
    echo "<tr>";
    echo "<td><h2>" . $colum['id'] . "</h2></td>";
    echo "<td><h2>" . $colum['nombre'] . "</h2></td>";
    echo "<td><h2>" . $colum['email'] . "</h2></td>";
    echo "</tr>";
}
echo "</table>";

mysqli_close($connection);

echo '<a href="index.html"> Volver Atrás</a>';
?>
