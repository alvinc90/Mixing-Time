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
               img: "../images/bar-ingredients/lime.png"
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
            img.setAttribute("src", `${ingredient.img}`)
            img.classList.add("ingredient-box-image")

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

    generateEmptylists() {
        this.emptyArr.forEach((emp) => {
            const ul = document.getElementById("shaker-lists");
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.setAttribute("src", "../images/bar-ingredients/blank.jpg")
            img.textContent = "none";
            img.classList.add("ingredient-box-image")
            li.textContent = emp
            li.classList.add("ingredient-box-2")
            ul.appendChild(li);
            li.appendChild(img);
        })
    }

    clearShakerList() {
        const clear = document.getElementById("clear");
        clear.addEventListener("click", () => {
            const imgs = document.querySelectorAll("#shaker-lists img");
            imgs.forEach((img) => {
                img.textContent = "none"
                img.setAttribute("src", "../images/bar-ingredients/blank.jpg")
            })
        })
    }

    removeShakerList() {
       const imgs = document.querySelectorAll("#shaker-lists img");
       imgs.forEach((img) => {
           img.addEventListener("click", () => {
               img.textContent = "none";
               img.setAttribute("src", "../images/bar-ingredients/blank.jpg")
           })
       })
    }
    
}

export default Cocktail;