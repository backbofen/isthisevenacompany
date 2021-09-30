const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
 // const nav = document.getElementsByTagName('ul')[0];
//toggle nav
  burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-active");

//kp 
  //  nav.classList.add('transition');

//animate links
    navLinks.forEach((link, index)=>{
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      }
      });
  //burger animation
  burger.classList.toggle("toggle");
  });

 // window.addEventListener('resize',
   // () => {
     // if (window.innerWidth > 1035) {
       // nav.classList.remove('transition');
     // }},
   // false
 // );
}

navSlide();


//function tmouseOver() {
  //document.getElementById("testsdiv").style.visibility = "hidden";
  //document.getElementById("erstellerdiv").style.visibility = "hidden";
  //document.getElementById("unterrichtszeitendiv").style.visibility = "hidden";
//}

//function tmouseOut() {
  //document.getElementById("testsdiv").style.opacity = 1;
  //document.getElementById("erstellerdiv").style.opacity = 1;
  //document.getElementById("unterrichtszeitendiv").style.opacity = 1;
//}