class Flavor {
    generateFlavor() {
        const flavorArr = [
            {
                name: "Grand Marnier",
                color: "orange"
            },
            {
                name: "Midori",
                color: "green"
            },
            {
                name: "Vermouth",
                color: "brown"
            },
            {
                name: "Peach Schnapps",
                color: "peach"
            },
            {
                name: "Amaretto",
                color: "purple"
            },
            {
                name: "Malibu",
                color: "yelow"
            }
        ]

        for(let i = 0; i < flavorArr.length; i++) {
            const ul = document.getElementById("flavor")
            const li = document.createElement("li")
            li.textContent = flavorArr[i].name
            li.style.color = `${flavorArr[i].color}`
            ul.appendChild(li);
        }
    }
}

export default Flavor;