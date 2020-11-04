import sayHi from './bar';
// import openBarMenu from './bar_menu';
// import openCity from './bar_menu';

console.log("Webpack is working!")
sayHi("Alvin");

// const alvin = document.getElementById("alvin"); 
// alvin.addEventListener('mouseover', turnGreen); 

// function turnGreen() {
//     console.log('Am I working?')
//     document.querySelector("#alvin").style.color = "green";
// }

// const tablinks = document.getElementsByClassName("tablinks");

// tablinks[0].addEventListener("click", openBarMenu(evt, "Beer-&-Wine"));
// tablinks[1].addEventListener("click", openBarMenu(evt, "Cocktail-Shaker"));
// for(let i = 0; i < tablinks.length; i ++) {
//     tablinks[i].addEventListener("click", openBarMenu(evt, "Beer-&-Wine") )
// }

// const defaultElement = document.getElementById("Beer-&-Wine"); 
// defaultElement.style.display = "block";
// defaultElement.classList.add("active");

const openBarMenu = (e, alcoholType) => {

  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    // tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].classList.remove('active');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(alcoholType).style.display = "block";
  e.currentTarget.className += " active";

//   const newElement = document.getElementById(alcoholType); 
//   newElement.style.display = "block";
//   newElement.classList.add("active");
};

const tablinks = document.getElementsByClassName("tablinks");

tablinks[0].addEventListener("click", openBarMenu(e, "Beer-&-Wine"));
tablinks[1].addEventListener("click", openBarMenu(e, "Cocktail-Shaker"));
// tablinks[0].addEventListener("click", openBarMenu("Beer-&-Wine"));
// tablinks[1].addEventListener("click", openBarMenu("Cocktail-Shaker"));
