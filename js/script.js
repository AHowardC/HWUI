$(document).ready(function() {

  const right = document.querySelector(".right")
  const left = document.querySelector(".left")
  const profile = document.querySelector(".profilePic")
  const closeMe = document.querySelector(".closeMenu")
  const userSection = document.querySelector(".UserProfileSection")
  const dropDown = document.querySelector("#myDropdown")
  var menu = $("#leftBar");
  var caret = $(".toggleBtn");
  var menuHover = $(".homeHoverSpace")
  var home = $("#home")
  var menuOpen;

  // open the left side navigation menu
  function openMenu() {
    menu.css("left", "0px");
    menuOpen = true;
  }
  // close the left side navigation menu
  function closeMenu() {
    menu.css("left", "-250px");
    menuOpen = false;
  }
  // toggle the left side navigation menu open and closed
  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  // make toggle work at the click of the caret
  caret.on({
    click: function() {
      toggleMenu();
    }
  })

  // toggle caret button to right and to left on left side nav
  right.classList.remove("hide");
  left.classList.add("hide");

  function reveal(e) {
    left.classList.toggle("hide");
    right.classList.toggle("hide");
  }

  right.addEventListener("click", reveal, false)
  left.addEventListener("click", reveal, false)


  // fade in and out effect at the profile picture on top nav bar
  profile.classList.remove("fadeOut");
  closeMe.classList.add("fadeIn");

  //toggle fade in and out on click top nav
  function revealMe(e) {
    e.preventDefault();
    profile.classList.toggle("fadeOut");
    closeMe.classList.toggle("fadeIn");
  }

  // toggle slide out drop down on click of profile picture
    $(".img").click(function(){
      $("#myDropdown").slideToggle(250);
    });

  // $("#dropDownProfile").animate({opacity: 0,}, 1000);
  $("#dropDownProfile").fadeTo(1000, 1);
  // $("#dropDownSettings").animate({opacity: 0,}, 1000);
  $("#dropDownSettings").fadeTo(1000, 1);
  // $("#dropDownLogout").animate({opacity: 0,}, 1000);
  $("#dropDownLogout").fadeTo(1000, 1);

  closeMe.addEventListener("click", revealMe, false)
  profile.addEventListener("click", revealMe, false)
  closeMe.addEventListener("click", myFunction, false)
  profile.addEventListener("click", myFunction, false)
});