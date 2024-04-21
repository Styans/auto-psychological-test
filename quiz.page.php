<?php

$directory = './quests';
$files = scandir($directory);
$jsonFiles = [];

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
        $jsonFiles[] = pathinfo($file, PATHINFO_FILENAME);
    }
}

$valid = false;
if (isset($_GET['name'])) {
    $name = $_GET['name'];
    foreach ($jsonFiles as $fsName) {
      if ($name == $fsName) {
        $valid = true;
      }
    }
    if (!$valid) {
      header("HTTP/1.0 404 Not Found");
      exit ("данной страницы не существует 404");

    }
} else {
  header("HTTP/1.0 404 Not Found");
    exit ("данной страницы не существует 404");

}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $name ?></title>
    <link rel="stylesheet" href="style.css" >

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  </head>
  <body>
    <div class="wrapper">
      <?php
        include('nav.php');
      ?>

      <div class="main">
        <div class="container">
          <div class="quiz">
            <div class="quiz_header">
              <h2 class="quiz_header-title"><?php echo $name ?></h2>
              <div class="quiz_progress">
                <div class="quiz_progress-inner"></div>
              </div>
            </div>
            <div class="quiz_content">
            <div class="invisible" id="results_screen">
                <h2 class="section-heading text-center">Who are you?</h2>
	    			    <div id="generated_text"></div>
              </div>
              <h3 class="quiz_title"></h3>

              <form class="quiz_list"></form>
            </div>
            <hr>
            <div class="quiz_footer">
              <div class="quiz_total">1 из 5</div>
              <div class="invisible confirm_answer" id="confirm_answer">
                
                <button class="button" onclick="nextQuestion()" type="button">Next Question</button>
              </div>

              <div class="invisible" id="reapeat_btn">
              
                <button class="button" onclick="repeatQuiz()" type="button">repeat Question</button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="./js/quiz.js"></script>
  </body>
</html>
