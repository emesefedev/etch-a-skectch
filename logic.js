const ELEMENT_SIZE = 16 // px
const GAP_SIZE = 1 //px
const MAX_ROWS = 32
const MAX_COLUMNS = 32

let totalRows = 5
let totalColumns = 4

window.addEventListener("load", () => {
    const container = document.querySelector(".flex-container")

    const rowsButton = document.querySelector("#rows-button")
    const columnsButton = document.querySelector("#columns-button")
    const displayButton = document.querySelector("#display-button")
    const restartButton = document.querySelector("#restart-button")

    rowsButton.addEventListener("click", () => {
        columnsButton.classList.remove("hidden")
        do {
            totalRows = +prompt(`How many rows? min = 1 & max = ${MAX_ROWS}`)
        } while (totalRows <= 0 || totalRows > MAX_ROWS)
    })

    columnsButton.addEventListener("click", () => {
        displayButton.classList.remove("hidden")
        do {
            totalColumns = +prompt(`How many columns? min = 1 & max = ${MAX_COLUMNS}`)
        } while (totalColumns <= 0 || totalColumns > MAX_COLUMNS)
    })

    displayButton.addEventListener("click", () => {
        restartButton.classList.remove("hidden")
        generateGrid(container)
    })

    restartButton.addEventListener("click", () => {
        container.classList.add("hidden")
        columnsButton.classList.add("hidden")
        displayButton.classList.add("hidden")
        restartButton.classList.add("hidden")
    })

})

function generateGrid(container) {
    container.classList.remove("hidden")
    container.innerHTML = ""

    const totalElements = totalRows * totalColumns
    const containerWidth = totalColumns * ELEMENT_SIZE + (totalColumns - 1) * GAP_SIZE
    container.style.width = `${containerWidth}px`
    
    container.addEventListener("mouseover", (event) => {
        const target = event.target
        if (target != container) {
            target.classList.add("flex-item-hover")
        }
    })

    for (i = 0; i < totalElements; i++) {
        const div = document.createElement("div")
        div.classList.add("flex-item")
        container.appendChild(div)
    }
}

