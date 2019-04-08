<?php 
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$formcontent = "From: $name \nEmail: $email \nPhone: $phone \nMessage: $message";
$recipient = "irakriskovic@gmail.com";
$subject = "Request";
$mailheader = "From: Art Line Website \n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error, please try again.");
?>

<!DOCTYPE html>
<html lang="hr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Art Line</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Ira" />
    <meta name="description" content="Art Line" />
    <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="css/main.css" type="text/css" />
    <link
      href="https://fonts.googleapis.com/css?family=Aleo|Kotta+One|Milonga"
      rel="stylesheet"
    />
  </head>
  <body>
    <header>
      <div class="logo"><h1>Art Line</h1></div>
      <div class="menu">
        <div class="menu-btn">
          <div class="btn-line"></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        </div>
        <nav class="menu-list">
          <ul>
            <li class="menu-item active"><a href="index.html">Proizvodi</a></li>
            <li class="menu-item"><a href="onama.html">O nama</a></li>
            <li class="menu-item"><a href="cjenik.html">Cjenik</a></li>
            <li class="menu-item"><a href="kontakt.php">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <?php header("location: hvala.html?sent"); ?>
    </main>
    <footer></footer>
    <script src="js/script.js"></script>
  </body>
</html>
