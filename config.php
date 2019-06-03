<?php

  $path = __DIR__;
  $base = basename($path);
  $altpath = 'http://' . $_SERVER["HTTP_HOST"] .'/'. $base;
  // when you upload change altpath $altpath = "https://" . $_SERVER["HTTP_HOST"]; or remove base
  // $altpath = "http://" . $_SERVER["HTTP_HOST"];
  $style = $altpath . '/style';
  $images = $altpath . '/images';
  $work = $altpath . '/work';
  $js = $altpath. '/js';

?>
