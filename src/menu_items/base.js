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
        }
    }
}

export default Base; 