<?php

$directory = './quests';
$files = scandir($directory);
$jsonFiles = [];

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'json') {
        $jsonFiles[] = pathinfo($file, PATHINFO_FILENAME);
    }
}

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <?php
        include('nav.php');
      ?>
      <div class="main">
        <div class="container">
          <div class="grid_quests">
            <?php
            foreach ($jsonFiles as $fileName) {
                echo '<a href="quiz.page.php?name=' . $fileName . '" class="quest">' . $fileName . '</a>';
            }
            ?>
          </div>
        </div>
      </div>
    </div>
    <script src="./js/main.js"></script>
  </body>
</html>
