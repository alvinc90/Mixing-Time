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
            li.addEventListener("click", () => {
                const glass = document.getElementById("beer-wine-glass")
                const li = document.createElement("li")
                li.textContent = wineArr[i].name
                li.style.color = `${wineArr[i].color}`
                glass.appendChild(li);
            })
        }
    }
    //NOT WORKING YET, NEED TO REWORK
    // addTrayItem() {
    //     const li = document.createElement("li")
    //     li.addEventListener("click", () => {
    //             const glass = document.getElementById("beer-wine-glass")
    //             const li2 = document.createElement("li")
    //             li2.textContent = wineArr[i].name
    //             li2.style.color = `${wineArr[i].color}`
    //             glass.appendChild(li2);
    //         })
    // }

    removeTrayItem() {
        const remove = document.getElementById("remove");
            remove.addEventListener("click", () => {
                const lists = document.querySelectorAll("#beer-wine-glass li");
                const glass = document.getElementById("beer-wine-glass")
                glass.removeChild(lists[lists.length - 1])

            })
    }
}

export default Wine;