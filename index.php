<?php
include 'conexion/conexion.php';
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"> -->
</head>

<body>
<center>
        <h1>BIBLIOTECA</h1>
    </center>




    <div class="container" style="background-color:grey">

        <h5>Mi aplicación</h5>
        <div class=" row">




            <div class="container text-center p-5">
                <div class="row justify-content-center">
                    <div class="col-sm-5 text-center">
                        <form action="" method="POST">


                            <div class="mb-3">
                                <label for="cod" class="form-label">Codigo de la pelicula</label>
                                <input type="text" class="form-control" id="cod" name="cod" />
                            </div>
                            <div class="mb-3">
                                <label for="autor" class="form-label">Nombre De la pelicula</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" />
                            </div>
                            <div class="mb-3">
                                <label for="nomlib" class="form-label">Precio de la pelicula</label>
                                <input type="number" class="form-control" id="precio" name="precio" />
                            </div>
                            <div class="mb-3">
                                <label for="cant" class="form-label">Cantidad</label>
                                <input type="number" class="form-control" id="cant" name="cant" />
                            </div>

                            <?php
#comprobar si los campos estan vacios o no 
                            if (!empty($_POST)) {

                                if (empty($_POST['cod']) || empty($_POST['nombre'])|| empty($_POST['precio'])|| empty($_POST['cant'])) {
                            ?>
                                    <script>
                                        alert("Todos los campos son obligatorios")
                                    </script>
                                    <?php
                                } else {

                                    $cod = $_POST["cod"];
                                    $nombre = $_POST["nombre"];
                                    $precio = $_POST["precio"];
                                    $cant = $_POST["cant"];
                                    $llenartabla = "INSERT INTO cinemas(Codigo,Nombre,Precio,Cantidad ) values('$cod','$nombre','$precio','$cant')";
                                    if ($conexion->query($llenartabla) === TRUE) {
                                    ?>
                                        <script>
                                            alert("REGISTRO CORRECTO")
                                        </script>
                                    <?php  } else {
                                    ?>
                                        <script>
                                            alert("REGISTRO INCORRECTO")
                                        </script>
                            <?php
                                    }
                                }
                            }
                            ?>
                            <input class="btn btn-success" type="submit" value="opcion1">

                        </form>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">

            <div class="col-2">

            </div>
            

            <div class="col-3">
                <button type="submit" class="btn btn-primary">Opcion2</button>

            </div>
            <div class="col-4">

                <button type="submit" class="btn btn-primary">opcion3</button>
            </div>

        </div>


    </div>

    </div>




    <script type="text/javascript" src="js/functions.js"></script>
</body>
<footer class="sticky-footer bg-white">
  <div class="container my-auto">
    <div class="copyright text-center my-auto"></div>
  </div>
</footer>

</html>