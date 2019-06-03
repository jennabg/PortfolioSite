<?php  require_once 'config.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title> Jenna Greenberg Portfolio Site </title>
  <link rel="stylesheet" type="text/css" href="<?=$style?>/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">


</head>
<body>
  <nav id="main-menu">
  <a class="skip-main" href="#main">Skip to main content</a>
    <div class="flex-logo">
      <div class="nav-flex">
        <a href="<?=$altpath?>/index.php"><img id="logo" src="<?=$images?>/logo-08.png" alt="Jenna Greenberg Logo"></a>
      </div>
      <div class="flex-list">
        <i class="fas fa-bars" id="menu-icon"></i>
        <ul id="nav-list" class="nav-hide">
          <li id="close-icon" class="hide"><i class="fas fa-window-close"></i></li>
          <li> <a href="<?=$altpath?>/index.php"> Home </a> </li>
          <li> <a href="<?=$altpath?>/index.php#main"> Work </a> </li>
          <li> <a href="<?=$altpath?>/about.php"> About </a> </li>
          <li> <a href="<?=$altpath?>/contact.php"> Contact </a></li>
        </ul>
      </div>
    </div>
  </nav>
