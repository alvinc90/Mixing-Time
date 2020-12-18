import Customer from "./customer";
import Timer from './timer';
class Order {
    constructor() {

        this.orderArr = [
            {
                cocktail: "margarita",
                recipe: ["tequila", "lime", "salt"]
            },
            {
                cocktail: "martini",
                recipe: ["vodka", "olive", "ice"]
            },
            {
                cocktail: "mojito",
                recipe: ["rum", "mint", "lime"]
            },
            {
                cocktail: "old fashion",
                recipe: ["whiskey", "cherry", "orange"]
            }
        ]
    }

    generateOrder() {
        let randomIdx = Math.floor( Math.random() * this.orderArr.length );
        let randomOrder = this.orderArr[randomIdx].cocktail
        let randomRecipe = this.orderArr[randomIdx].recipe
        const order = document.getElementById("order");
        const h2 = document.createElement("h2");
        h2.classList.add("order")
        h2.textContent = `${randomOrder}`;
        order.appendChild(h2)
    }
    
    checkRecipeMatch() {
        let cocktailIdArr = [];
        const findOrder = document.getElementsByClassName("order")[0].textContent;
        this.orderArr.forEach((item, i) => {
            if (item.cocktail === findOrder) {
                cocktailIdArr.push(i);
            }
        })
        const recipeArr = this.orderArr[cocktailIdArr[0]].recipe;
        const shakerList1 = document.querySelectorAll("#shaker-lists img")[0].textContent;
        const shakerList2 = document.querySelectorAll("#shaker-lists img")[1].textContent;
        const shakerList3 = document.querySelectorAll("#shaker-lists img")[2].textContent;

       if ( ( recipeArr.includes(shakerList1) && ( (shakerList1 !== shakerList2) && (shakerList1 !== shakerList3) ) ) && 
            ( recipeArr.includes(shakerList2) && ( (shakerList2 !== shakerList1) && (shakerList2 !== shakerList3) ) ) && 
            ( recipeArr.includes(shakerList3) && ( (shakerList3 !== shakerList1) && (shakerList3 !== shakerList2) ) )  ) {
            alert("Good Job!");
            this.clearList();
            this.result();
            this.removeOrder();
            this.generateOrder();
            new Customer().removeCustomer();
            new Customer().generateCustomer();
    
            new Timer().resetTimer();
            return true;
        } 
        else {
           alert("Wrong Drink!")
           this.strike();
           return false;
       }
        
    }

    removeOrder() {
        const h2 = document.querySelector("#order > h2");
        if(h2) {
            const h1 = document.getElementById("order");
            h1.removeChild(h2);
        }
    }

    clearList() {
        const imgs = document.querySelectorAll("#shaker-lists img");
        imgs.forEach((img) => {
            img.textContent = "none"
            img.setAttribute("src", "images/bar_ingredients/blank.jpg")
        })
    }

    result() {
        const res = document.getElementById("result");
        let resInt = parseInt(res.textContent);
        resInt += 50;
        res.textContent = resInt;
    }

    resetResult() {
        const res = document.getElementById("result");
        res.textContent = "0";
    }

    strike() {
        const strikes = document.getElementsByClassName("strikes");
        const lastStrike = strikes.length - 1;
        if (strikes.length === 1) {
            this.gameOver();
        } else {
            strikes[lastStrike].remove();
        }
    }

    gameOver() {
        const timer = document.getElementById("timer");
        const result = document.getElementById("result");
        const highscore = document.getElementById("highscore");
        const closingModal = document.getElementById("closing-modal");
        const banana = document.getElementsByClassName("left-inner-container")[0];
        const audio = document.querySelector("audio");
        
        timer.textContent = "10";
        closingModal.style.display = "block";
        banana.style.display = "none";
        highscore.textContent = result.textContent
        // audio.pause();
        // audio.currentTime = 0;
        this.removeOrder();
        new Customer().removeCustomer();
        new Timer().stopTimer();
    }


};

export default Order;