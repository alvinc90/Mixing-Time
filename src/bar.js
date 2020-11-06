
const showContent = (contentIdx) => {
    const tabContents = document.getElementsByClassName("tabcontent-outer-container");
    
    for(let j = 0; j < tabContents.length; j++) {
        tabContents[j].style.display = "none";
    }
    
    return tabContents[contentIdx].style.display = "block";
}

export default showContent;