class Order {
    constructor() {
        this.generateOrder();
    }

    generateOrder() {
        const beers = [
            {
                name: "White Claw"
            },
            {
                name: "Guiness"
            },
            {
                name: "Sierra Nevada"
            },
            {
                name: "Pabst Blue Ribbon"
            },
            {
                name: "Blue Moon"
            },
            {
                name: "Anchor Steam"
            }
        ]

        const wines = [
            {
                name: "Cabernet Sauvignon"
            },
            {
                name: "Pinot Noir"
            },
            {
                name: "Sauvignon Blanc"
            },
            {
                name: "Chardonnay"
            },
            {
                name: "Champange"
            },
            {
                name: "Rose"
            }
        ]

        const cocktails = [
            {
                name: "Mojito"
            },
            {
                name: "Cosmopolitan"
            },
            {
                name: "Margarita"
            },
            {
                name: "Old Fashion"
            },
            {
                name: "Moscow Mule"
            },
            {
                name: "Martini"
            }
        ]

        const allOrders = []
        beers.forEach((beer) => allOrders.push(beer));
        wines.forEach((wine) => allOrders.push(wine));
        cocktails.forEach((cocktail) => allOrders.push(cocktail));
        const randIdx = Math.floor(Math.random() * allOrders.length)
        const randOrder = allOrders[randIdx];

        const right = document.querySelector(".right");
        const h1 = document.createElement("h1")
        h1.classList.add("order")
        h1.textContent = `${randOrder.name} please..`
        right.appendChild(h1);
      
    }
}

export default Order;