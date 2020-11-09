class Base {
    generateBase() {
          const baseArr = [
            {
                name: "Vodka",
                color: "white"
            },
            {
                name: "Tequila",
                color: "orange"
            },
            {
                name: "Scotch",
                color: "brown"
            },
            {
                name: "Gin",
                color: "skyblue"
            },
            {
                name: "Bourbon",
                color: "red"
            },
            {
                name: "Rum",
                color: "yellow"
            }
        ]

         for(let i = 0; i < baseArr.length; i++) {
            const ul = document.getElementById("base")
            const li = document.createElement("li")
            li.textContent = baseArr[i].name
            li.style.color = `${baseArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = baseArr[i].name
                li.style.color = `${baseArr[i].color}`
                shaker.appendChild(li);
            })
        }
    }

    removeTrayItem() {
        const remove = document.getElementById("remove2");
            remove.addEventListener("click", () => {
                const lists = document.querySelectorAll("#shaker li");
                const shaker = document.getElementById("shaker")
                shaker.removeChild(lists[lists.length - 1])

            })
    }
}

export default Base; 