
const cont = document.getElementById("container")
const inp_side = document.getElementById("input_side")

function resizer() {
    if (window.innerWidth < 1020) {
        cont.style.flexDirection = "column"
        cont.style.transform = "translate(-50%,0)"
        cont.style.top = 0
        inp_side.style.margin = "0 auto"
    } else if (window.innerHeight < 600) {
        cont.style.transform = "translate(-50%,0)"
        cont.style.top = 0
    } else {
        cont.style.flexDirection = "row"
        cont.style.position = "absolute"
        cont.style.transform = "translate(-50%, -50%)"
        cont.style.top = "50%"
        cont.style.left = "50%"
    }
}

window.addEventListener("resize", resizer)
resizer()

// window.resizeTo(window.innerWidth-1, window.innerHeight)

