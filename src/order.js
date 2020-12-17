import Customer from "./customer";
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

       if ( (recipeArr.includes(shakerList1)) && (recipeArr.includes(shakerList2)) && (recipeArr.includes(shakerList3)) ) {
            alert("you win!");
            this.clearList();
            this.result();
            new Customer().removeCustomer();
            new Customer().generateCustomer();
            this.removeOrder();
            this.generateOrder();
            return true;
       } else {
           alert("try again!")
           return false;
       }
        
    }

    removeOrder() {
        const h2 = document.querySelector("#order > h2");
        const h1 = document.getElementById("order");
        h1.removeChild(h2);
    }

    clearList() {
        const imgs = document.querySelectorAll("#shaker-lists img");
        imgs.forEach((img) => {
            img.textContent = "none"
            img.setAttribute("src", "../images/bar-ingredients/blank.jpg")
        })
    }

    result() {
        debugger
        const res = document.getElementById("result");
        let resInt = parseInt(res.textContent);
        resInt += 1000;
        res.textContent = resInt;
    }
};

export default Order;