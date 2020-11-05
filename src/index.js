import sayHi from './bar';

console.log("Webpack is working!")
sayHi("Alvin");

const showContent = (contentIdx) => {
    const tabContents = document.getElementsByClassName("tabcontent-outer-container");
    
    for(let j = 0; j < tabContents.length; j++) {
        tabContents[j].style.display = "none";
    }
    
    return tabContents[contentIdx].style.display = "block";
}

const tabButtons = document.getElementsByClassName("tabButton");

tabButtons[0].addEventListener("click", () => showContent(0))
tabButtons[1].addEventListener("click", () => showContent(1))

showContent(0); 