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
               img: "some path"
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
        this.shakerArr = [];
    }

    generateIngredients() {
        this.ingredients.forEach((ingredient, i) => {
            const ul = document.getElementById("cocktail-ingredients");
            const li = document.createElement("li");
            li.textContent = ingredient.name;
            li.classList.add("ingredient-box");
            li.setAttribute("data-id", i)
            li.addEventListener("click", () => {
                const lists = document.getElementById("shaker-lists");
                const list = document.createElement("li");
                list.textContent = ingredient.name;
                lists.appendChild(list);
            });
            ul.appendChild(li);
        })
    };

    removeShakerList() {
        const lists = document.getElementById("shaker-lists");
        lists.forEach((list) => {
            
        })
    }
}

export default Cocktail;