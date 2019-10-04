//Selecting DOM items

const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('.nav-item');


//set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close'); 
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;

    }

}


/* Shapes */
var bm = document.getElementById('bm');
var animItem = bodymovin.loadAnimation({
  wrapper: bm,
  animType: 'svg',
  loop: true,
  autoplay: false,
  path: '/dist/animation/data.json' 
});

animItem.addEventListener('DOMLoaded', function() {
  animItem.play();
});
window.addEventListener("load", function() {
    animItem.stop();
    bm.parentNode.removeChild(bm); 
    console.log("All resources finished loading!");
  });




  // Get the modal
var modal = document.getElementById("myModal");
console.log(modal)

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  console.log('we are here')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}