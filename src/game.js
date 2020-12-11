console.log("i am a cunt")
import showContent from './bar';

class Game {

    switching() {
        const tabButtons = document.getElementsByClassName("tabButton");

        tabButtons[0].addEventListener("click", () => showContent(0))
        tabButtons[1].addEventListener("click", () => showContent(1))

        showContent(0);
    }


}

export default Game; 