class Cocktail {
    constructor() {
        this.ingredients = [
           {
               name: "tequila",
               img: "some path"
           },
           {
               name: "vodka",
               img: "some path"
           },
           {
               name: "rum",
               img: "some path"
           },
           {
               name: "whiskey",
               img: "some path"
           },
           {
               name: "lime",
               img: "../images/lime.png"
           },
           {
               name: "salt",
               img: "some path"
           },
           {
               name: "olive",
               img: "some path"
           },
           {
               name: "ice",
               img: "some path"
           },
           {
               name: "mint",
               img: "some path"
           },
           {
               name: "cherry",
               img: "some path"
           },
           {
               name: "orange",
               img: "some path"
           },
           {
               name: "lemon",
               img: "some path"
           },

        ];
        this.emptyArr = ["none", "none", "none"];
        this.dataIdArr = [];
        this.generateIngredients();
        this.generateEmptylists();
        this.clearShakerList();
        this.removeShakerList();
    }

    generateIngredients() {
        this.ingredients.forEach((ingredient, i) => {
            const ul = document.getElementById("cocktail-ingredients");
            const li = document.createElement("li");
            const img = document.createElement("img")
            
            li.textContent = ingredient.name;
            li.classList.add("ingredient-box");
            li.setAttribute("id", i);
            li.addEventListener("click", () => {
                const shaker = document.querySelectorAll("#shaker-lists > li");
                this.dataIdArr.push(li.id)
                let dataIdArr = this.dataIdArr;
                let length = this.dataIdArr.length
                const lastId = dataIdArr[length - 1];
                shaker.forEach((shakerList) => {
                    if (shakerList.textContent === "none") {
                        const newName = this.ingredients[lastId].name
                        shakerList.textContent = newName;
                        throw new Error("This is not an error, I did it to stop code execution =)")
                    } 
                })
            });
            ul.appendChild(li);
        })
    };

    generateEmptylists() {
        this.emptyArr.forEach((emp) => {
            const ul = document.getElementById("shaker-lists");
            const li = document.createElement("li");
            li.classList.add("ingredient-box-2")
            li.textContent = emp
            ul.appendChild(li);
        })
    }

    clearShakerList() {
        const remove = document.getElementById("remove");
        remove.addEventListener("click", () => {
            const lists = document.querySelectorAll("#shaker-lists > li");
            lists.forEach((list) => {
                list.textContent = "none"
            })
        })
    }

    removeShakerList() {
       const lists = document.querySelectorAll("#shaker-lists > li");
       lists.forEach((list) => {
           list.addEventListener("click", () => {
               list.textContent = "none"
           })
       })
    }
    
}

export default Cocktail;