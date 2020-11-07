class Wine {
    generateWine() {
        const wineArr = [
            {
                name: "Cabernet Sauvignon",
                color: "orange"
            },
            {
                name: "Pinot Noir",
                color: "yellow"
            },
            {
                name: "Sauvignon Blanc",
                color: "limegreen"
            },
            {
                name: "Chardonnay",
                color: "skyblue"
            },
            {
                name: "Champagne",
                color: "purple"
            },
            {
                name: "Rose",
                color: "red"
            }
        ]

        for(let i = 0; i < wineArr.length; i++) {
            const ul = document.getElementById("wine")
            const li = document.createElement("li")
            li.textContent = wineArr[i].name
            li.style.color = `${wineArr[i].color}`
            ul.appendChild(li);
        }
    }
}

export default Wine;