class Customer {
    constructor() {

        this.customerArr = [
            {
                name: "man",
                url: "../images/customer/boy.png"
            },
            {
                name: "woman",
                url: "../images/customer/girl.png"
            }
        ]

        this.generateCustomer();
    }

    generateCustomer() {
        let randIdx = Math.floor(Math.random() * this.customerArr.length)
        const h1 = document.getElementById("customer");
        const img = document.createElement("img");
        img.setAttribute("src", this.customerArr[randIdx].url);
        img.classList.add("customer")
        h1.appendChild(img);
    }

};

export default Customer;