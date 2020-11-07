class Garnish {
   
    generateGarnish() {
        const garnishArr = [
            {
                name: "Lime",
                img: "../../images/garnish/lime.jpg",
                color: "limegreen"
            },
            {
                name: "Olive",
                img: "../../images/garnish/olive.jpg",
                color: 'olive'
            },
            {
                name: "Mint",
                img: "../../images/garnish/mint.jpg",
                color: "darkgreen"
            },
            {
                name: "Lemon twist",
                img: "../../images/garnish/lemon_twist.jpg",
                color: "yellow"
            },
            {
                name: "Cherry",
                img: "../../images/garnish/cherry.jpeg",
                color: "red"
            },
            {
                name: "Pineapple",
                img: "../../images/garnish/pineapple.jpg",
                color: "yellow"
            }

        ]

        for(let i = 0; i < garnishArr.length; i++) {
            const li = document.createElement("li")
            const ul = document.getElementById("garnish")
            li.textContent = garnishArr[i].name
            li.style.color = `${garnishArr[i].color}`
            ul.appendChild(li);
        }
    }

}

export default Garnish;