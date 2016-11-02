<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Learn Chinese</title>
    <!-- Bootstrap -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" type="image/gif" href="../img/favicon.gif">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container-fluid bg-info">
      <h1 class="text-center"> 谢谢你尝试我们的游戏</h1><h5 class="text-center">Thank you for playing Learn Chinese!</h5>
      <br><br>
      <h1 class="text-center"><span class="questions-counter"></span>题中你答对了<span class="correct-counter"></span>题</h1>
      <h5 class="text-center"> You had <span class="correct-counter"></span> correct out of <span class="questions-counter"></span> questions.</h5>
      <br><br>
      <h1 class="text-center" id="custom-message-chinese"></h1>
      <h5 class="text-center" id="custom-message-english"></h5>

      <!-- Play again button -->
      <div class="container-fluid">
        <br><br><br>
        <div class="center-block">
            <button id="startbutton" name="startbutton" class="btn btn-primary btn-lg center-block" onclick="document.location.href='play.php';">
                <span>再玩</span><span><h6>Play Again</h6></span>
            </button>
        </div>
      </div>
      
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../bootstrap/js/bootstrap.min.js"></script>

    <!-- Javascript for finish.php -->
    <script src="../js/finish.js"></script>
  </body>
 </html>