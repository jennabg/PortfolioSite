window.onload = pageReady

function pageReady(){



  // Toggle between graphic design and web design blocks

  var prevScrollpos = window.pageYOffset;
  var menubtn = document.getElementById('menu-icon');
  var navlist = document.getElementById('nav-list')
  var closeIcon = document.getElementById('close-icon');
  var graphic = document.getElementsByClassName('graphic');
  var web = document.getElementsByClassName('web');
  var gbutton = document.getElementById('graphic');
  var wbutton = document.getElementById('web');
  var abutton = document.getElementById('all');
  var mainmenu = document.getElementById('main-menu');
  var sticky = mainmenu.offsetTop;

  window.onscroll = stickyNav;
  menubtn.onclick = displayMenu;
  closeIcon.onclick = hideMenu;
  gbutton.onclick = showGraphic;
  wbutton.onclick = showWeb;
  abutton.onclick = showAll;


  function stickyNav() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mainmenu.classList.add("sticky")
    } else {
      mainmenu.classList.remove("sticky");
    }
  }



  function displayMenu(){
    navlist.classList.remove("nav-hide");
    navlist.classList.add("nav-show");
    closeIcon.classList.remove("hide");
  }

  function hideMenu(){
    navlist.classList.add("nav-hide");
    navlist.classList.remove("nav-show");
    closeIcon.classList.add("hide");
  }


  function showGraphic(){
    for (var i = 0; i< web.length; i++){
      web[i].classList.add("hide");
    };
    for(var i=0; i<graphic.length; i++){
      graphic[i].classList.remove("hide")
    };
  }

  function showWeb(){
    for(var i=0; i<graphic.length; i++){
      graphic[i].classList.add("hide")
    };
    for (var i = 0; i< web.length; i++){
      web[i].classList.remove("hide");
    };

  }

  function showAll(){
    for(var i=0; i<graphic.length; i++){
      graphic[i].classList.remove("hide")
    };
    for (var i = 0; i< web.length; i++){
      web[i].classList.remove("hide");
    };

  }
// https://codepen.io/nickcil/pen/sfutl for code on how to make the fade happen
  // $(window).scroll(function(){
  //   $(".fade").css("opacity", 1 - $(window).scrollTop() / 250);
  // });


}
