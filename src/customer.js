class Customer {
    constructor() {

        this.customerArr = [
            {
                name: "male_1",
                url: "../images/customer/male_1.png"
            },
            {
                name: "male_2",
                url: "../images/customer/male_2.png"
            },
            {
                name: "female_1",
                url: "../images/customer/female_1.png"
            },
            {
                name: "female_2",
                url: "../images/customer/female_2.png"
            }
        ]
    }

    generateCustomer() {
        let randIdx = Math.floor(Math.random() * this.customerArr.length)
        const h1 = document.getElementById("customer");
        const img = document.createElement("img");
        img.setAttribute("src", this.customerArr[randIdx].url);
        img.classList.add("customer")
        h1.appendChild(img);
    }

    removeCustomer() {
        const h1 = document.getElementById("customer");
        const img = document.querySelector("#customer > img");
        h1.removeChild(img);
    }

};

export default Customer;