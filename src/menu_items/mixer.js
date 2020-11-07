class Mixer {
    generateMixer() {
        const mixerArr = [
            {
                name: "Coke", 
                img: "../../images/mixer/coke.jpg"
            },
            {
                name: "Soda",
                img: "../../images/mixer/soda.jpg"
            },
            {
                name: "Tonic",
                img: "../../images/mixer/tonic.jpg"
            },
            {
                name: "Ginger Ale",
                img: "../../images/mixer/ginger.jpeg"
            },
            {
                name: "Cranberry J",
                img: "../../images/mixer/cranberry.jpg"
            },
            {
                name: "Orange J",
                img: "../../images/mixer/orange.jpg"
            },
            {
                name: "Sour Mix",
                img: "../../images/mixer/sourmix.jpg"
            }
        ]

        for(let i = 0; i < Math.floor(mixerArr.length / 2); i++) {
            const img = document.createElement("img")
            const ul = document.getElementById("mixer")
            img.setAttribute('src', `${mixerArr[i].img}`)
            img.setAttribute('data-mixer-id', i)
            img.setAttribute("height", "70px")
            img.setAttribute("width", "50px")
            ul.appendChild(img)
        }

        for(let i = Math.floor(mixerArr.length / 2); i < mixerArr.length; i++) {
            const img = document.createElement("img")
            const ul = document.getElementById("mixer2")
            img.setAttribute('src', `${mixerArr[i].img}`)
            img.setAttribute('data-mixer-id', i)
            img.setAttribute("height", "70px")
            img.setAttribute("width", "50px")
            ul.appendChild(img)
        }

    }
}

export default Mixer;