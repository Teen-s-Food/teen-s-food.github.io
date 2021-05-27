function normalText(x) {
  x.style.color = "gray";
}

function themeChecking() {
if (localStorage.getItem('theme') == null)
{
  localStorage.setItem('theme', 'dark');
  document.getElementById("theme").checked = true;
}
else {
  var Theme = localStorage.getItem('theme');
  if ( Theme == 'dark' )
  {
      document.getElementById("theme").checked = true;
      document.body.style.backgroundColor = "#47624fff";
      document.getElementById("textMain").style.color = "white";
      document.getElementById("navBar").style.backgroundColor = "#333333";
      document.getElementById("siteFooter").style.backgroundColor = "#333333";
      $('h6[name="text"]').css('color','white');
      $('a[class="social-icons"]').css('backgroundColor','#262626');
      $('nav[id="navBar"]').removeClass('navbar-light').addClass('navbar-dark');
      $('dic[class="card"]').addClass('card-inverse').addClass('text-white');




  }
  if ( Theme == 'light')
  {
      document.getElementById("theme").checked = false;
      document.body.style.backgroundColor = "#daedbdff";
      document.getElementById("textMain").style.color = "black";
      document.getElementById("navBar").style.backgroundColor = "white";
      document.getElementById("siteFooter").style.backgroundColor = "white";
      $('h6[name="text"]').css('color','black');
      $('a[class="social-icons"]').css('backgroundColor','gray');
      $('nav[id="navBar"]').removeClass('navbar-dark').addClass('navbar-light');
      $('dic[class="card"]').removeClass('card-inverse').removeClass('text-white');


  }
}
}

function changingTheme() {
var checkBox = document.getElementById("theme");
if (checkBox.checked == true){
  localStorage.setItem('theme', 'dark' );
  themeChecking();
  //document.body.style.backgroundColor = "black";
} else {
   localStorage.setItem('theme', 'light');
   themeChecking();
   //document.body.style.backgroundColor = "white";
}
}
