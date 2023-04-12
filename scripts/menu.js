
let plot_tab_button = document.getElementById("plot_tab_b")
let generate_tab_button = document.getElementById("generate_tab_b")

let plot_div = document.getElementById("plot_div")
let gen_div = document.getElementById("gen_div")

function clearFocusButton(b) {
    b.style.backgroundColor = "#e5e7eb"
    b.style.color = "black"
}

function setFocutButton(b) {
    b.style.backgroundColor = "rgb(80, 80, 80)"
    b.style.color = "white"
}

plot_tab_button.addEventListener("click", () => {
    clearFocusButton(generate_tab_button)
    setFocutButton(plot_tab_button)
    plot_div.style.display = "block"
    gen_div.style.display = "none"
})

generate_tab_button.addEventListener("click", () => {
    clearFocusButton(plot_tab_button)
    setFocutButton(generate_tab_button)
    plot_div.style.display = "none"
    gen_div.style.display = "block"
})

setFocutButton(generate_tab_button)
generate_tab_button.click()


