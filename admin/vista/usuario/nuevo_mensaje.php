<!DOCTYPE html>
<html lang="es">

<head>
    <!--  Practica01 – Mi Blog  
          Author: Malki Yupanki  
          Date:   Abril 2019 -->
    <meta charset="utf-8" />
    <title>Mensaje</title>
    <script type="text/javascript" src="validar.js"></script>
    <!--   <link href="css/estilo.css" rel="stylesheet" type="text/css"/>-->

</head>

<body>
    <section>
        <div class="nvm">
            <?php
            $cone = $_GET["cone"];
            //echo $cone;
            ?>
            <header>
                <h1>NUEVO MENSAJE</h1>
            </header>
        </div>
        
        <div id="nvm">
            <form action="controlador_mensaje.php" method="POST">

                <legend>Mensaje (*)</legend>
                
                <input type="hidden" id="remitente" name="remitente" value="<?php echo $cone ?>" />

                <label id="Destinatario">Para :</label>
                <input type="text"  id="destinatario" name="destinatario" onkeyup=""/>
                <span id="correocorrecto"></span>
                <br>
                <label id="Asunto">Asunto :</label>
                <input type="text" name="asunto" />
                <br>
                <label id="Mensaje">Mensaje</label>
                <input class="pl" type="text" name="mensaje" />
                <br>

                <div id="mdv">
                <input class="btn" id="guargar" name="guardar" type="submit" value="Eniviar">&nbsp;
                <input class="btn" id="borrar" name="borrar" type="Reset" value="Borrar">
                <button type="button" class="btn btn-default"><a href="index_usuario.php?cone='<?php echo $cone; ?>'">CANCELAR</a></button>
                </div>
            </form>
        </div>
        <footer>
      Gabriel Leonardo Chuchuca Arevalo &#8226; Universidad Politecnica Salesiana &#8226; <a href="mailto:gchuchucaa@est.ups.edu.ec">gchuchucaa@est.ups.edu.ec</a> &#8226;  <a href="tel:+593-969375242">0969375242</a>
    <br>© Todos los derechos reservados
   </footer>

    </section>
</body>

</html>