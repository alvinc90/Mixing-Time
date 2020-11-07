class Beer {

    generateBeer() {
        const beerArr = [
            {
                name: "White Claw",
                img: "../../images/beer/white_claw.jpeg"
            },
            {
                name: "Guinness",
                img: "../../images/beer/guinness.jpg"
            },
            {
                name: "Sierra Nevada",
                img: "../../images/beer/SierraNevadaPaleAle.jpg"
            },
            {
                name: "Pabst Blue Ribbon",
                img: "../../images/beer/pbr.jpg"
            },
            {
                name: "Blue Moon",
                img: "../../images/beer/blue_moon_logo.jpg"
            },
            {
                name: "Anchor Steam",
                img: "../../images/beer/anchor_steam.jpg"
            }
        ]

         for(let i = 0; i < beerArr.length / 2; i++) {
           const img = document.createElement("img")
           const ul = document.getElementById("beer1")
           img.setAttribute("src", `${beerArr[i].img}`)
           img.setAttribute("data-beer-id1", i)
           ul.appendChild(img);
        }

        for(let i = beerArr.length / 2; i < beerArr.length; i++) {
           const img = document.createElement("img")
           const ul = document.getElementById("beer2")
           img.setAttribute("src", `${beerArr[i].img}`)
           img.setAttribute("data-beer-id2", i)
           ul.appendChild(img);
        }
    }
}

export default Beer; 