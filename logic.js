const ELEMENT_SIZE = 16 // px
const GAP_SIZE = 1 //px

const totalRows = 5
const totalColumns = 4


const totalElements = totalRows * totalColumns

window.addEventListener("load", () => {
    console.log("load")

    const container = document.querySelector(".flex-container")
    const containerWidth = totalColumns * ELEMENT_SIZE + (totalColumns - 1) * GAP_SIZE
    container.style.width = `${containerWidth}px`

    for (i = 0; i < totalElements; i++) {
        const div = document.createElement("div");
        div.classList.add("flex-item")
        container.appendChild(div)
    }
    
})


