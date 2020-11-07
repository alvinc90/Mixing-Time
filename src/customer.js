class Customer{
    generateCustomer() {
        const customers = [
            {
                name: "guy",
                img: "../images/customer/man.jpeg"
            },
            {
                name: "girl",
                img: "../images/customer/woman.jpg"
            }
        ]
        let randIdx = Math.floor(Math.random() * customers.length)
        const img = document.createElement("img")
        img.setAttribute("src", `${customers[randIdx].img}`)
        img.setAttribute("height", "350px");
        img.setAttribute("width", "350px")
        const div = document.querySelector(".left")
        div.appendChild(img)
    }
}
export default Customer;