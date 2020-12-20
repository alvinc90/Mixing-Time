import Customer from "./customer";
import Timer from './timer';
class Order {
    constructor() {
        this.customer = new Customer();
        this.timer = new Timer();

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

    generateStrikes() {
        const strikeArr = ["/", "/", "/"]
        strikeArr.forEach((strike) => {
            const div = document.getElementById("strike-container");
            const span = document.createElement("span");
            span.textContent = strike;
            span.classList.add("strikes");
            div.appendChild(span)
        })
    }

    removeStrikes() {
        const strikes = document.querySelectorAll("#strike-container span");
        strikes.forEach((strike) => {
            strike.remove();
        })
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

    resetTips() {
        const tips = document.getElementById("tips");
        tips.textContent = "0";
    }
};

export default Order;