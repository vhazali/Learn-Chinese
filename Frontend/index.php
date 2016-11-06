<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Learn Chinese</title>
    <!-- Bootstrap -->
    <link href="Frontend/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" type="Frontend/image/gif" href="Frontend/img/favicon.gif">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <!-- Welcome message -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="text-center"> 你好 欢迎来学华语</h1>
        <h3 class="text-center text-muted">Hello! Welcome to Learn Chinese!</h3>
      </div>
    </div>

    <!-- Start button -->
    <div class="center-block">
        <button id="startbutton" name="startbutton" class="btn btn-primary btn-lg center-block" onclick="document.location.href='Frontend/pages/play.php';">
            <span>游戏开始</span><br>
            <span><h6>Click on me to Start!</h6></span>
        </button>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="Frontend/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="Frontend/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>