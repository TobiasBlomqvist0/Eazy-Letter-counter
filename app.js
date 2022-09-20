const textArea = document.querySelector("textarea")
const p        = document.querySelector("p")

textArea.addEventListener("input", () => {
    console.log(textArea.value.length)
    p.innerText = textArea.value.length
})

