class BarMenu {
   
    generateGarnish() {
        const garnishArr = [
            {
                name: "lime", 
                img: "../images/garnish/lime.jpg"
            },
            {
                name: "olive",
                img: "../images/garnish/olive.jpg"
            },
            {
                name: "mint",
                img: "../images/garnish/mint.jpg"
            },
            {
                name: "lemon twist",
                img: "../images/garnish/lemon_twist.jpg"
            },
            {
                name: "cherry",
                img: "../images/garnish/cherry.jpeg"
            },
            {
                name: "pineapple.jpg",
                img: "../images/garnish/pineapple.jpg"
            }

        ]

        for(let i = 0; i < 3; i++) {
           const img = document.createElement("img")
           const ul = document.getElementById("garnish")
           img.setAttribute("src", `${garnishArr[i].img}`)
           img.setAttribute("data-garnish-id1", i)
           img.setAttribute("height", "50px")
           img.setAttribute("width", "50px")
           ul.appendChild(img);
        }

        for(let i = 3; i < garnishArr.length; i++) {
           const img = document.createElement("img")
           const ul = document.getElementById("garnish2")
           img.setAttribute("src", `${garnishArr[i].img}`)
           img.setAttribute("data-garnish-id2", i)
           img.setAttribute("height", "50px")
           img.setAttribute("width", "50px")
           ul.appendChild(img);
        }
    }

}

export default BarMenu;