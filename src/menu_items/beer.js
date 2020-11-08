class Beer {

    generateBeer() {
        const beerArr = [
            {
                name: "White Claw",
                img: "../../images/beer/white_claw.jpeg",
                color: "white"
            },
            {
                name: "Guinness",
                img: "../../images/beer/guinness.jpg",
                color: "orange"
            },
            {
                name: "Sierra Nevada",
                img: "../../images/beer/SierraNevadaPaleAle.jpg",
                color: "yellow"
            },
            {
                name: "Pabst Blue Ribbon",
                img: "../../images/beer/pbr.jpg",
                color: "red"
            },
            {
                name: "Blue Moon",
                img: "../../images/beer/blue_moon_logo.jpg",
                color: "skyblue"
            },
            {
                name: "Anchor Steam",
                img: "../../images/beer/anchor_steam.jpg",
                color: "rgb(160,82,45)"
            }
        ]

         for(let i = 0; i < beerArr.length; i++) {
            const ul = document.getElementById("beer")
            const li = document.createElement("li")
            li.textContent = beerArr[i].name
            li.style.color = `${beerArr[i].color}`
            ul.appendChild(li);
            li.addEventListener("click", () => {
                const glass = document.querySelector("#beer-wine-glass")
                const li = document.createElement("li")
                li.textContent = beerArr[i].name
                li.style.color = `${beerArr[i].color}`
                glass.appendChild(li);
            })
        }
    }
}

export default Beer; 