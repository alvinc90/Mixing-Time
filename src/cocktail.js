class Cocktail {
    constructor() {
        this.ingredients = [
           {
               name: "tequila",
               img: "images/bar_ingredients/tequila.png"
           },
           {
               name: "vodka",
               img: "images/bar_ingredients/vodka.png"
           },
           {
               name: "rum",
               img: "images/bar_ingredients/rum.png"
           },
           {
               name: "whiskey",
               img: "images/bar_ingredients/whiskey.png"
           },
           {
               name: "lime",
               img: "images/bar_ingredients/lime3.png"
           },
           {
               name: "salt",
               img: "images/bar_ingredients/salt.png"
           },
           {
               name: "olive",
               img: "images/bar_ingredients/olive.png"
           },
           {
               name: "ice",
               img: "images/bar_ingredients/ice2.png"
           },
           {
               name: "mint",
               img: "images/bar_ingredients/mint.png"
           },
           {
               name: "cherry",
               img: "images/bar_ingredients/cherry2.png"
           },
           {
               name: "orange",
               img: "images/bar_ingredients/orange.png"
           },
           {
               name: "lemon",
               img: "images/bar_ingredients/lemon.png"
           },

        ];
        this.emptyArr = ["none", "none", "none"];
        this.dataIdArr = [];
        // this.generateIngredients();
        // this.generateEmptylists();
        // this.clearShakerList();
        // this.removeShakerList();
    }

    generateIngredients() {
        this.ingredients.forEach((ingredient, i) => {
            const ul = document.getElementById("cocktail-ingredients");
            const li = document.createElement("li");
            const img = document.createElement("img")
            img.setAttribute("src", ingredient.img)
            img.classList.add("ingredient-box-image3")

            li.textContent = ingredient.name;
            li.classList.add("ingredient-box");
            li.setAttribute("id", i);
            img.setAttribute("id", i);
            img.addEventListener("click", () => {
                const shaker = document.querySelectorAll("#shaker-lists img");
                this.dataIdArr.push(img.id)
                let dataIdArr = this.dataIdArr;
                let length = this.dataIdArr.length
                const lastId = dataIdArr[length - 1];
                shaker.forEach((shakerImg) => {
                    if (shakerImg.textContent === "none") {
                        const newName = this.ingredients[lastId].name
                        const newImg = this.ingredients[lastId].img
                        shakerImg.setAttribute("src", newImg);
                        shakerImg.textContent = newName;
                        throw new Error("This is not an error, I did it to stop code execution =)")
                    } 
                })
            });
            ul.appendChild(li);
            li.appendChild(img);
        })
    };
    
    removeIngredients() {
        const ul = document.getElementById("cocktail-ingredients");
        const list = document.querySelectorAll("#cocktail-ingredients li");
        list.forEach((li) => {
            ul.removeChild(li)
        })
    }

    generateEmptylists() {
        this.emptyArr.forEach((emp) => {
            const ul = document.getElementById("shaker-lists");
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.setAttribute("src", "images/bar_ingredients/blank.jpg")
            img.textContent = "none";
            img.classList.add("ingredient-box-image")
            li.textContent = emp
            li.classList.add("ingredient-box-2")
            ul.appendChild(li);
            li.appendChild(img);
        })
    }

    removeShakerLists() {
        const ul = document.getElementById("shaker-lists");
        const lists = document.querySelectorAll("#shaker-lists li");
        lists.forEach((li) => {
            ul.removeChild(li);
        })
    }

    clearShakerListButton() {
        const clear = document.getElementById("clear");
        clear.addEventListener("click", () => {
            const imgs = document.querySelectorAll("#shaker-lists img");
            imgs.forEach((img) => {
                img.textContent = "none"
                img.setAttribute("src", "images/bar_ingredients/blank.jpg")
            })
        })
    }

    removeShakerIngredientButton() {
       const imgs = document.querySelectorAll("#shaker-lists img");
       imgs.forEach((img) => {
           img.addEventListener("click", () => {
               img.textContent = "none";
               img.setAttribute("src", "images/bar_ingredients/blank.jpg")
           })
       })
    }
    
}

export default Cocktail;