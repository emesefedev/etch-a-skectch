window.addEventListener("load", () => {
    console.log("load")

    const cointainer = document.querySelector(".flex-container")

    const div = document.createElement("div");
    div.classList.add("flex-item");
    cointainer.appendChild(div)
    
})


