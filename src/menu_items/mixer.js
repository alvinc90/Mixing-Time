class Mixer {
    generateMixer() {
        const mixerArr = [
            {
                name: "Coke", 
                img: "../../images/mixer/coke.jpg",
                color: "red"
            },
            {
                name: "Soda",
                img: "../../images/mixer/soda.jpg",
                color: "white"
            },
            {
                name: "Tonic",
                img: "../../images/mixer/tonic.jpg",
                color: "purple"
            },
            {
                name: "Ginger Ale",
                img: "../../images/mixer/ginger.jpeg",
                color: "green"
            },
            {
                name: "Cranberry J",
                img: "../../images/mixer/cranberry.jpg",
                color: "red"
            },
            {
                name: "Orange J",
                img: "../../images/mixer/orange.jpg",
                color: "orange"
            },
            {
                name: "Sour Mix",
                img: "../../images/mixer/sourmix.jpg"
            }
        ]

        for(let i = 0; i < mixerArr.length; i++) {
            const li = document.createElement("li")
            const ul = document.getElementById("mixer")
            li.textContent = mixerArr[i].name
            li.style.color = `${mixerArr[i].color}`
            ul.appendChild(li)
            li.addEventListener("click", () => {
                const shaker = document.getElementById("shaker")
                const li = document.createElement("li")
                li.textContent = mixerArr[i].name
                li.style.color = `${mixerArr[i].color}`
                shaker.appendChild(li);
            })
        }

    }
}

export default Mixer;