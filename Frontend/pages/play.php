<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Learn Chinese</title>
    <!-- Bootstrap -->
    <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="../css/play.css" rel="stylesheet">
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
      <div>
        <h1>Score: <span id="correct-counter">0</span>/<span id="questions-counter">0</span></h1>
      </div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3><span class="label label-warning" id="qid">2</span> Option 3 is the correct answer.</h3>
          </div>
          <div class="modal-body">
            <div class="col-xs-3 col-xs-offset-5">
              <div id="loadbar" style="display: none;">
                <div class="blockG" id="rotateG_01"></div>
                <div class="blockG" id="rotateG_02"></div>
                <div class="blockG" id="rotateG_03"></div>
                <div class="blockG" id="rotateG_04"></div>
                <div class="blockG" id="rotateG_05"></div>
                <div class="blockG" id="rotateG_06"></div>
                <div class="blockG" id="rotateG_07"></div>
                <div class="blockG" id="rotateG_08"></div>
              </div>
            </div>

            <div class="quiz" id="quiz" data-toggle="buttons">
              <label class="element-animation1 btn btn-lg btn-primary btn-block " id="option-1"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right" id="option-1-icon"></i></span> <input type="radio" name="q_answer" value="1">One</label>
              <label class="element-animation2 btn btn-lg btn-primary btn-block" id="option-2"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right" id="option-2-icon"></i></span> <input type="radio" name="q_answer" value="2">Two</label>
              <label class="element-animation3 btn btn-lg btn-primary btn-block" id="option-3"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right" id="option-3-icon"></i></span> <input type="radio" name="q_answer" value="3">Three</label>
              <label class="element-animation4 btn btn-lg btn-primary btn-block" id="option-4"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right" id="option-4-icon"></i></span> <input type="radio" name="q_answer" value="4">Four</label>
            </div>
          </div>
          <div class="modal-footer">
            <span id="answer"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid jumbotron">
      <div class="pull-left">
        <button id="finish-button" name="finish-button" class="btn btn-primary btn-lg" onclick="">
              Finish
        </button>
      </div>
      <div class="pull-right">
        <button id="next-button" name="next-button" class="btn btn-primary btn-lg" onclick="">
              Next Question
        </button>
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../bootstrap/js/bootstrap.min.js"></script>
    <!-- javascript for play.php-->
    <script src="../js/play.js"></script>
  </body>
</html>